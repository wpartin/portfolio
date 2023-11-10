const CodeBlockSerializer = (props) => {
  return (
    <pre>
      <code>{props.children}</code>
    </pre>
  );
};

export const serializers = {
  types: {
    code: CodeBlockSerializer,
  },
};
