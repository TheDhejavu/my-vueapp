import { TextInput, Button, PasswordInput } from "../../../components/Form";

export default {
    name: "login",
    components:{
        TextInput,
        Button,
        PasswordInput
    },
    data (){
        return {
            formControls: {

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
            });
        }
    }
};