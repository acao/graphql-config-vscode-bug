
const schema = gql`
# this is the example enum
enum ExampleEnum {
    food
    water
    shelter
}

# for example
type Example {
    field: String
    field2: ExampleEnum
    fiel3: String
   shelter: String
   something: String
   however: String
}

type Query {
    exampleField(need: ExampleEnum): Example
    love: String
    message: String
    example: Boolean
    example2: String
    example3: Boolean
    example4: Boolean
    example5: Boolean
    example6: String
    something: String
    something2: String
    something3: String
}
`
