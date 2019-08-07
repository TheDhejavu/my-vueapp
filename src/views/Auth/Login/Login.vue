<template>
    <div class="auth-container">
        <div class="auth-content">
            <div class="auth-content__top text-center">
                <h4 class="heading">Login</h4>
                <p class="text "> <i class='uil uil-padlock'></i> Login securely</p>
            </div>
            <form v-on:submit.prevent="handleSubmit">
                <TextInput
                     :label="formControls.email.label"
                    name="email"
                    :error ="errors.first('email')"
                    v-model="formControls.email.value"
                     required
                    v-validate="formControls.email.validationRules"
                    :placeholder="formControls.email.placeholder"
                >
                </TextInput>

                <PasswordInput
                   :label="formControls.password.label"
                    name="password"
                     :error ="errors.first('password')"
                    v-model="formControls.password.value"
                    required
                    v-validate="formControls.password.validationRules"
                     :placeholder="formControls.password.placeholder"
                >
                </PasswordInput>

                <Button
                    value="Login"
                >
                </Button>
            </form>
            <div class="auth-content__bottom text-center">
                 <p class="text">Forgotten password? <router-link to="/reset">Reset</router-link></p>
                <p class="text">New here? <router-link to="/register">Create an account</router-link></p>
            </div>
        </div>
    </div>
</template>

<script src="./Login.js"></script>
<style lang="sass" scoped></style>
