@echo off

cd src\antlr || exit /b 1

java -jar ..\..\lib\antlr-4.13.1-complete.jar ^
    -visitor ^
    -Dlanguage=TypeScript ^
    -o generated ^
    Lumina.g4


cd ..\.. || exit /b 1