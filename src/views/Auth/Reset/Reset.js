import { TextInput, Button } from "../../../components/Form";

export default {
    name: "reset",
    components:{
        TextInput,
        Button
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
                    },
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