const gql = (arg: TemplateStringsArray) => null;

gql`
  # query something {
  #   streamable {
  #     text
  #   }
  #   test {
  #     ...ExampleFragment7
  #     ...ExampleFragment11
  #   }
  # }

  query {
    streamable @include(if: true){
      text
      ...ExampleFragment4
    }
  }
`;
