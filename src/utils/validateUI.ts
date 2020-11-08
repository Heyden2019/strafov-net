const validateUI = (value: string) => {
    value = value.trim()
    return value.length === 0 ? "Введите УИН" :
    value.match(/\D/) ? "УИН должен иметь только цифры" :
    value.length !== 20 && value.length !== 25 ? "УИН должен иметь 20 или 25 цифр" :
    null
}

export default validateUI