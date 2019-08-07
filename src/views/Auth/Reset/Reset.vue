<template>
    <div class="auth-container">
        <div class="auth-content">
            <div class="auth-content__top text-center">
                <h4 class="heading">Reset</h4>
                <p class="text "> <i class='uil uil-fast-mail'></i> Enter your email</p>
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

                <Button
                    value="Reset"
                >
                </Button>
            </form>
            <div class="auth-content__bottom text-center">
                <p class="text"><router-link to="/login">Login Here</router-link></p>
            </div>
        </div>
    </div>
</template>

<script src="./Reset.js"></script>
<style lang="sass" scoped></style>
