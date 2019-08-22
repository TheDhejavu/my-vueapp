import { TextInput, Button, PasswordInput  } from "../../../components/Form";
import { mapGetters} from "vuex";
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
            isLoading: false
        }
    },


    mounted(){

    },
    computed: {
        ...mapGetters(["currentUser", "authFeedback"])
    },
    methods: {

        handleSubmit() {
            this.isLoading = true;

            let user = {};
            for(var key in this.formControls){
                user[key] = this.formControls[key].value;
            }
            this.$validator.validateAll().then(valid => {
                if (valid) {
                    this.$store.dispatch("SIGNUP", user);
                }
            })
        }
    },

    watch: {
        authFeedback(newValue) {
            this.isLoading =false;
            if(newValue.error){
                this.$toaster.error(newValue.message)
            }else{
                this.$toaster.success(newValue.message)
                setTimeout( ()=>{
                    this.$router.push("home")
                }, 500)
            }
        },
    },
};