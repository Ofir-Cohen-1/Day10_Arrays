const colorValidation = (color) => {
    color = 'YellOw';

    switch (color.toLowerCase()) {
        case 'yellow':
        case 'pink':
        case 'orange':
        return 'light color';

        case 'blue':
        case 'purple':
        case 'brown':
            return 'dark color';
      
            default:
                return 'unknown color';
        }
}
console.log(colorValidation());