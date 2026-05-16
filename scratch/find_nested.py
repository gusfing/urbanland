import os
import re

def find_nested_comments(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.htm') or file.endswith('.html'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Find instances where <!-- appears before the previous comment is closed
                    # This is a bit tricky with regex, so we'll do a simple state machine or count
                    stack = 0
                    for match in re.finditer(r'<!--|-->', content):
                        if match.group() == '<!--':
                            stack += 1
                            if stack > 1:
                                print(f"Potential nested comment in {path} at index {match.start()}")
                        else:
                            stack -= 1

if __name__ == "__main__":
    find_nested_comments('src')
