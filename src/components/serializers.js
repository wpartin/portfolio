const CodeBlockSerializer = ({ node }) => {
  return <code>{node.code}</code>;
};

export const serializers = {
  types: {
    code: CodeBlockSerializer,
  },
};
