def number_of_vowels():
    word=input('Escribe una palabra: ')
    vowels=['a','e','i','o','u']
    cant=0
    for char in word:
        if char in vowels:
            cant+=1
    print(f'La palabra {word} tiene {cant} vocales')

if __name__=='__main__':
    number_of_vowels()