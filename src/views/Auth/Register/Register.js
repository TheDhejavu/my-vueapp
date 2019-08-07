import { TextInput, Button, PasswordInput  } from "../../../components/Form";

export default {
    name: "register",
    components:{
        TextInput,
        Button,
        PasswordInput
    },
    data (){
        return {
            formControls: {
                fullName: {
                    value: '',
                    label:"Your name",
                    placeholder: 'e.g Joe Doe',
                    touched: false,
                    validationRules: {
                        required: true,
                    }
                },
                phoneNumber:{
                    value: '',
                    label:"Phone number",
                    placeholder: 'e.g +23400000000000',
                    touched: false,
                    validationRules: {
                        required: true,
                        numeric: true,
                    }
                },
                email: {
                    value: '',
                    label:"Email address",
                    touched: false,
                    placeholder: 'e.g joe@example.com',
                    validationRules: {
                        required: true,
                        email: true
                    }
                },
                password: {
                    value: '',
                    label:"Password",
                    touched: false,
                    placeholder: '***********',
                    validationRules: {
                        required: true,
                        min: 6
                    }
                },
            },
            submitted: false
        }
    },
    computed: {

    },
    methods: {
        handleSubmit() {
            this.submitted = true;

            this.$validator.validateAll().then(valid => {
                if (valid) {
                    this.register(this.user);
                }
            })
        }
    }
};