@echo off

cd src\antlr || exit /b 1

java -jar ..\antlr-4.13.1-complete.jar ^
    -visitor ^
    -Dlanguage=JavaScript ^
    -o ..\js\generated ^
    lexer.g4 parser.g4