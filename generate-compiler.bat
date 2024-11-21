@echo on

cd compiler\src\antlr || exit /b 1

java -jar ..\..\..\antlr-4.13.1-complete.jar ^
    -visitor ^
    -Dlanguage=TypeScript ^
    -o ..\js\generated ^
    lexer.g4 parser.g4


cd ..\..\..