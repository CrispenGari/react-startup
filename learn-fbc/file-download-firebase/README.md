### Storage files

Getting the metadata of a file in firebase storage.

```js
...
const [imageSize, setImageSize] = useState(0);
storage
  .refFromURL(post?.imageUrl)
  .getMetadata()
  .then((meta) => {
    setImageSize(meta.size);
});
...
```

The following function will then convert the size from bytes to kilo-bytes.

```js
const fileSize = (size) => {
  return (+size / 1024).toFixed(2) + "kb";
};
```

### Downloading the files.
