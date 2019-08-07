<template>
    <div class="auth-container">
        <div class="auth-content">
            <div class="auth-content__top text-center">
                <h4 class="heading">Register</h4>
                <p class="text "> <i class='uil uil-padlock'></i> Create an account for free!!</p>
            </div>
            <form v-on:submit.prevent="handleSubmit">
                <text-input
                    :label="formControls.fullName.label"
                    name="fullname"
                    v-model="formControls.fullName.value"
                    :error ="errors.first('fullname')"
                    required
                    v-validate="formControls.fullName.validationRules"
                    :placeholder="formControls.fullName.placeholder"
                >
                </text-input>

                <text-input
                    :label="formControls.email.label"
                    name="email"
                    :error ="errors.first('email')"
                    v-model="formControls.email.value"
                     required
                    v-validate="formControls.email.validationRules"
                    :placeholder="formControls.email.placeholder"
                >
                </text-input>

                <text-input
                     :label="formControls.phoneNumber.label"
                    name="phone_number"
                     :error ="errors.first('phone_number')"
                    v-model="formControls.phoneNumber.value"
                    required
                    v-validate="formControls.phoneNumber.validationRules"
                    :placeholder="formControls.phoneNumber.placeholder"
                >
                </text-input>
                
                <password-input
                   :label="formControls.password.label"
                    name="password"
                     :error ="errors.first('password')"
                    v-model="formControls.password.value"
                    required
                    v-validate="formControls.password.validationRules"
                     :placeholder="formControls.password.placeholder"
                >
                </password-input >

                <Button
                    value="Create account"
                >
                </Button>
            </form>
            <div class="auth-content__bottom text-center">
                <p class="text">Already have an account? <router-link to="/login">Login</router-link></p>
            </div>
        </div>
    </div>
</template>

<script src="./Register.js"></script>
<style lang="sass" scoped></style>
