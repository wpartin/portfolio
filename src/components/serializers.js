const CodeBlockSerializer = (props) => {
  return <code>{props.children}</code>;
};

export const serializers = {
  types: {
    code: CodeBlockSerializer,
  },
};
