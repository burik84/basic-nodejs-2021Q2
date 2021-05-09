# Caesar cipher CLI tool

## Easy to use

- Download project files
- Got to project root directory
- Run ```npm install```

## Run the program and arguments

Action is encode
```bash
node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"

node my_caesar_cli --action encode --shift 7 --input "./input.txt" --output "./output.txt"
```

Action is decode -> Decoding encoded initial string with the same -s(--shift) number produces the initial string.
```bash
node my_caesar_cli --action decode --shift 7 --input "./input.txt" --output "./output.txt"
```

About arguments:

1. **-s, --shift**: a shift
2. **-i, --input**: an input file
3. **-o, --output**: an output file
4. **-a, --action**: an action encode/decode