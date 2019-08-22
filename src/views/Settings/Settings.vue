<template>
    <layout page="Settings">
        <div class="settings-content__container">
        <div class="settings-content">
            <h4 class="text-center">Edit profile</h4>
            <div class="form-container">
                <form method="POST" class="form" @submit.prevent="handleSubmit">
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



                        <Button
                            value="Save Changes"
                            classNames="small"
                        >
                        </Button>
                </form>
            </div>
        </div>
        <div class="settings-content change-password">
            <h4 class="text-center">Change password</h4>
            <div class="form-container">
                <form class="form" @submit.prevent="handleSubmit" method="POST">

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



                        <password-input
                        :label="formControls.newPassword.label"
                            name="new_password"
                            :error ="errors.first('new_password')"
                            v-model="formControls.newPassword.value"
                            required
                            v-validate="formControls.newPassword.validationRules"
                            :placeholder="formControls.newPassword.placeholder"
                        >
                        </password-input >

                        <Button
                            value="Save Changes"
                            classNames="small"
                        >
                        </Button>
                </form>
            </div>
        </div>
       </div>
    </layout>
</template>
<script src="./Settings.js"></script>
<style lang="scss">
.settings-content__container{
    padding:30px 20px;
}
.settings-content{
    padding-top:15px;
}
.settings-content.change-password{
    padding-top:25px;
}
</style>
