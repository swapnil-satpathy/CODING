/*
Algorithm

1. Create an empty stack
2. Iterate through each character in string
3. if character x is
    --> operand -> Output it
    --> Left Parenthesis -> Push to Stack
    --> Right Parenthesis -> Pop from Stack until left parenthesis is found. Output the popped ops
    --> Operator -
                 --> If stack is empty push x to stack
                 --> Else compare with stack top
                    --> If x has higher precedence than stack top, push to stack
                    --> Lower precedence , pop st top and output until a higher precedence operator is found. Then push x to stack
                    -> Equal precedence, use associativity

*/