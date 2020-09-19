<template>
  <div class="d-flex align-center fill-height">
    <v-card class="mx-auto" width="400" outlined>
      <v-card-title>Login</v-card-title>

      <v-card-text>
        <v-text-field
          v-model="email"
          @blur="$v.email.$touch()"
          :error-messages="emailErrors"
          label="Email"
          outlined
          single-line
          dense
          clearable
        />

        <v-text-field
          v-model="password"
          @blur="$v.password.$touch()"
          :error-messages="passwordErrors"
          label="Password"
          outlined
          single-line
          dense
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        />

        <v-btn primary block color="primary" @click="loginFunction" :disabled="$v.$invalid">Login</v-btn>

        <v-row>
          <v-col>
            <div class="d-flex flex-row">
              <router-link
                tag="a"
                class="mt-2 py-2 accent--text"
                style="text-decoration: none"
                to="/register"
              >
                <strong>Register</strong>
              </router-link>
            </div>
          </v-col>

          <v-col>
            <div class="d-flex flex-row-reverse">
              <router-link
                tag="a"
                class="mt-2 py-2 accent--text"
                style="text-decoration: none"
                to="/forgot"
              >
                <strong>Forgot Password</strong>
              </router-link>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    email: "",
    password: "",
    show: false,
  }),

  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
  },

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push("Must be at least 8 char");
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
  },

  methods: {
    ...mapActions(["login"]),
    loginFunction() {
      var auth = {
        email: this.email,
        password: this.password
      }
      console.log(auth)
      console.log(this.email)
      console.log(this.password)
      this.login(auth)
    }
  },
};
</script>
