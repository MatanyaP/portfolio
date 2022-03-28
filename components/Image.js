import NextImage from "next/image";

const customLoader = ({ src }) => {
  return src
}

export default function Image(props) {
  return (
    <NextImage
      {...props}
      width={props.width || "50%"}
      loader={customLoader}
    />
  );
}