type TextSplitterProps = {
  text: string;
};

function TextSplitter({ text }: TextSplitterProps) {
  return (
    <span aria-label={text}>
      {text.split('').map((char, index) => {
        return (
          <span aria-hidden="true" key={index}>
            {char}
          </span>
        );
      })}
    </span>
  );
}

export default TextSplitter;
