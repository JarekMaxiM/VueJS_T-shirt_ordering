var app = new Vue({
    el: '#app',
    data: {
        title: 'T-Shirt',
        patternHeader: 'Wybór miejsca nadruku',
        previewHeader: 'Zmień obrazek',
        prevHeader: 'Poprzedni',
        nextHeader: 'Następny',
        randomHeader: 'Losuj nowy',
        formHeader: 'Dane zamawiającego',
        summaryHeader: 'Podsumowanie zamówienia',
        thanksHeader: 'Dziękujemy za złożenie zamówienia',
        pattern: 'img/koszulka_front.jpg',
        preview: 'https://picsum.photos/200?random=1',
        greyscale: false,
        blur: false,
        prev: null,
        next: null,
        step: 1,
        variant: 0,
        price: 10,
        formValid: false,
        variants: [
            {
                variantId: 0,
                variantName: 'Przód',
                variantImage: 'img/koszulka_front.jpg'
            },
            {
                variantId: 1,
                variantName: 'Tył',
                variantImage: 'img/koszulka_back.jpg'
            }
        ],
        form: {
            firstname: null,
            secondname: null,
            street: null,
            house: null,
            apartment: '',
            zipcode: null,
            city: null,
            phone: '',
            email: null
        },
        validate: {
            firstnameError: false,
            secondnameError: false,
            streetError: false,
            houseError: false,
            zipcodeError: false,
            cityError: false,
            emailError: false
        },
    },
    methods: {
        changePattern(variantImage, variantId) {
            this.pattern = variantImage;
            this.variant = variantId;
        },
        refreshPreview() {
            this.prev = this.preview;
            this.preview = 'https://picsum.photos/200?random=' + Math.floor(Math.random() * 1000);
            this.next = this.preview;
        },
        prevPreview() {
            this.preview = this.prev;
        },
        nextPreview() {
            this.preview = this.next;
        },
        changeStep(step) {
            this.step = step;
            if(step == 5) {
                this.prepareRequest();
            }
        },
        changePatternGrayscale(event) {
            if (event.target.checked) {
                this.preview = this.preview + '&grayscale'
            }
            else {
                this.preview.replace('&grayscale', '');
            }
        },
        changePatternBlur(event) {
            if (event.target.checked) {
                this.preview = this.preview + '&blur'
            }
            else {
                this.preview.replace('&blur', '');
            }
        },
        onSubmit() {
            if (this.form.firstname != null) {
                this.validate.firstnameError = false;
                this.formValid = true;
            } else {
                this.validate.firstnameError = true;
                this.formValid = false;
            }

            if (this.form.secondname != null) {
                this.validate.secondnameError = false;
                this.formValid = true;
            } else {
                this.validate.secondnameError = true;
                this.formValid = false;
            }

            if (this.form.street != null) {
                this.validate.streetError = false;
                this.formValid = true;
            } else {
                this.validate.streetError = true;
                this.formValid = false;
            }

            if (this.form.house != null) {
                this.validate.houseError = false;
                this.formValid = true;
            } else {
                this.validate.houseError = true;
                this.formValid = false;
            }

            if (this.form.zipcode != null) {
                this.validate.zipcodeError = false;
                this.formValid = true;
            } else {
                this.validate.zipcodeError = true;
                this.formValid = false;
            }

            if (this.form.city != null) {
                this.validate.cityError = false;
                this.formValid = true;
            } else {
                this.validate.cityError = true;
                this.formValid = false;
            }

            if (this.form.email != null) {
                this.validate.emailError = false;
                this.formValid = true;
            } else {
                this.validate.emailError = true;
                this.formValid = false;
            }

            if(this.formValid) {
                this.changeStep(4);
            }
        },
        prepareRequest() {
            var requestData = {
                variant: this.variants[this.variant].variantName,
                pattern: this.preview,
                price: this.price,
                form: this.form
            }
            console.log(requestData);
        }
    }
})