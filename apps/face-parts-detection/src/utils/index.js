import emoji from "node-emoji";
const plotParts = (ctx, detections) => {
  detections.forEach((detection) => {
    // in each and every detection we are going to receive all face parts
    const colors = ["red", "yellow", "blue", "green", "brown", "pink"];
    const parts = [
      {
        font: "30px Arial",
        part: "eye",
      },
      {
        font: "30px Arial",
        part: "ear",
      },
      {
        font: "30px Arial",
        part: "👄",
      },
      {
        font: "30px Arial",
        part: "nose",
      },
    ];
    const { landmarks } = detection;

    let index = 0;
    landmarks.forEach((landmark) => {
      ctx.fillStyle = colors[index];
      switch (index) {
        case 0:
        case 1:
          // these are eyes
          ctx.font = parts[0].font;
          ctx.fillText(
            emoji.emojify(`:${parts[0].part}:`),
            landmark[0] - 15,
            landmark[1] + 15
          );
          break;
        case 2:
          // this is a nose
          ctx.font = parts[3].font;
          ctx.fillText(
            emoji.emojify(`:${parts[3].part}:`),
            landmark[0] - 15,
            landmark[1]
          );
          break;
        case 3:
          // this is a mouth
          ctx.font = parts[2].font;
          ctx.fillText(
            emoji.emojify(`${parts[2].part}`),
            landmark[0] - 15,
            landmark[1] + 15
          );
          break;
        case 4:
        case 5:
          // these are ears
          ctx.font = parts[1].font;
          ctx.fillText(
            emoji.emojify(`:${parts[1].part}:`),
            landmark[0] - 15,
            landmark[1] + 15
          );
          break;
        default:
          break;
      }
      index++;
    });
  });
};
export default plotParts;
