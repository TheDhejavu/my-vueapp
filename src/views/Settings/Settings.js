import layout from "../../components/Layout/Layout.vue";
import { TextInput, Button, PasswordInput  } from "../../components/Form";

export default {
    name:"settings",
    components:{
        layout,
        TextInput,
        Button,
        PasswordInput
    },
    data (){
        return {
            formControls: {
                fullName: {
                    value: 'Akinola Ayodeji',
                    label:"Your name",
                    placeholder: 'e.g Joe Doe',
                    touched: false,
                    validationRules: {
                        required: true,
                    }
                },
                phoneNumber:{
                    value: '09039121087',
                    label:"Phone number",
                    placeholder: 'e.g +23400000000000',
                    touched: false,
                    validationRules: {
                        required: true,
                        numeric: true,
                    }
                },
                email: {
                    value: 'akinayodeji4all@gmail.com',
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
                newPassword: {
                    value: '',
                    label:"New Password",
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
}