import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./db";
import bcrypt from "bcryptjs";
import { Todos, Users } from "./db";
import { IUser, ITodo } from "./types";
dotenv.config();

const PORT = 3001 || process.env.PORT;
const app: express.Application = express();
// Midlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    code: 200,
    message: "Todo backend",
  });
});

app.get(
  "/todos/:username",
  async (req: express.Request, res: express.Response) => {
    const { username } = req.params;
    await Todos.find({ username: username }, (error: Error, doc: ITodo) => {
      if (error) {
        return res.status(500).json({
          code: 500,
          message: "Internal server error",
        });
      }
      return res.status(200).json(doc);
    });
  }
);

app.put("/todo/update", async (req: express.Request, res: express.Response) => {
  const { id, title, completed } = req.body;
  await Todos.findByIdAndUpdate(id, {
    todo: {
      title: title,
      completed: completed,
    },
  })
    .then((doc) => {
      return res.status(204).send(doc);
    })
    .catch((error: Error) => {
      return res.status(500).json({
        code: 500,
        message: "Internal server error",
      });
    });
});

app.delete(
  "/todo/delete/:id",
  async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    await Todos.findByIdAndDelete(id)
      .then(() => {
        return res.status(204).json({
          code: 204,
          message: "Deleted.",
        });
      })
      .catch((error: Error) => {
        return res.status(500).json({
          code: 500,
          message: "Internal server error",
        });
      });
  }
);

app.post(
  "/todo/create",
  async (req: express.Request, res: express.Response) => {
    const { username, title, completed } = req.body;
    await Todos.create(
      {
        username: username,
        todo: {
          title: title,
          completed: completed,
        },
      },
      (error: Error, doc: ITodo) => {
        if (error) {
          return res.status(500).json({
            code: 500,
            message: "Internal server error",
          });
        }
        return res.status(201).json(doc);
      }
    );
  }
);

app.post("/user/login", async (req: express.Request, res: express.Response) => {
  const { username, password } = await req.body;

  await Users.findOne({ username: username }, (error: Error, doc: IUser) => {
    if (error) {
      return res.status(500).json({
        code: 500,
        message: "Internal server error",
      });
    }
    if (doc) {
      bcrypt.compare(
        password,
        doc.password,
        (error: Error, success: boolean) => {
          if (error) {
            throw error;
          }
          if (success) {
            return res.status(200).json(doc);
          } else {
            return res.status(200).json({
              code: 200,
              message: "Invalid password.",
            });
          }
        }
      );
    } else {
      return res.status(200).json({
        code: 200,
        message: "username does not exits.",
      });
    }
  });
});
app.post(
  "/user/create",
  async (req: express.Request, res: express.Response) => {
    const { username, password } = await req.body;
    await Users.findOne({ username: username }, (error: Error, doc: IUser) => {
      if (error) {
        return res.status(500).json({
          code: 500,
          message: "Internal server error",
        });
      }
      if (doc) {
        return res.status(200).json({
          code: 200,
          message: "username already taken",
        });
      }
    });
    const hashedPassword = await bcrypt.hash(password, 10);
    await Users.create(
      {
        username: username,
        password: hashedPassword,
      },
      (error: Error, doc: IUser) => {
        if (error) {
          return res.status(500).json({
            code: 500,
            message: "Internal server error",
          });
        }
        return res.status(201).json(doc);
      }
    );
  }
);

app.listen(PORT, () => console.log("The server has started..."));
