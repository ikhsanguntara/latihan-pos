<template>
  <div class="d-flex align-center fill-height">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevetion-12">
            <v-window v-model="step">
              <!-- Forgot Password -->
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12">
                    <v-card-text>
                      <h1
                        class="text-center display-1 teal--text text accend-3"
                      >Kesulitan mengakses akun Anda ?</h1>
                      <p class="text-center">
                        Lupa kata sandi? Masukan email akun Anda dibawah ini. Kami akan mengirimkan email
                        beserta tautan untuk reset kata sandi Anda.
                      </p>
                      <v-row justify="center" align="center">
                        <v-col cols="8">
                          <v-text-field
                            v-model="email"
                            @blur="$v.email.$touch()"
                            :error-messages="emailErrors"
                            label="Email"
                            prepend-icon="mdi-email"
                            name="Email"
                            type="text"
                            color="teal accent-3"
                            outlined
                          />
                        </v-col>
                      </v-row>
                      <div class="text-center">
                        <v-btn
                          rounded
                          color="teal accent-3"
                          dark
                          @click="reset"
                          :disabled="$v.$invalid"
                        >Ganti Password</v-btn>
                      </div>
                      <div class="d-flex flex-row-reverse">
                        <v-btn rounded text @click="step++">Back to Sign in</v-btn>
                      </div>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window-item>
              <!-- login -->
              <v-window-item :value="2">
                <v-row>
                  <v-col cols="12" md="8" class="pa-0">
                    <v-card-text>
                      <h1 class="text-center display-1 teal--text text-accend-3">Sign in to App POS</h1>

                      <v-form class="mt-3">
                        <v-row align="center" justify="center">
                          <v-col cols="12" md="8">
                            <v-text-field
                              v-model="email"
                              label="Email"
                              @blur="$v.email.$touch()"
                              :error-messages="emailErrors"
                              prepend-icon="mdi-email"
                              name="Email"
                              type="text"
                              color="teal accent-3"
                              outlined
                            />
                          </v-col>
                        </v-row>
                        <v-row align="center" justify="center">
                          <v-col cols="12" md="8">
                            <v-text-field
                              v-model="password"
                              @blur="$v.password.$touch()"
                              :error-messages="passwordErrors"
                              label="Password"
                              name="Password"
                              prepend-icon="mdi-lock"
                              color=" teal accent-3"
                              outlined
                              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                              :type="show ? 'text' : 'password'"
                              @click:append="show = !show"
                            />
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded color="teal accent-3" dark @click="loginFunction">Sign in</v-btn>
                    </div>
                    <div class="d-flex flex-row-reverse">
                      <v-btn rounded text @click="step--">Forgot Password</v-btn>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" class="teal accent-3">
                    <v-card-text class="white--text mt-12">
                      <h1 class="text-center display-1">Heloo , freind</h1>
                      <h5 class="text-center">Enter personal detail and person</h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step ++">Sign Up</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <!-- register -->
              <v-window-item :value="3">
                <v-row class="fill-height">
                  <v-col cols="12" md="4" class="teal accend-3" align="center" justify="center">
                    <v-card-text class="white--text fill-height">
                      <h1 class="display-1">Welcome back</h1>
                      <br />
                      <h5 class>To keep connected with us login with your personal info</h5>
                      <div class="text-center">
                        <v-btn rounded outlined @click="step--">Sign in</v-btn>
                      </div>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1 class="text-center display-2 teal--text text--accent-3">Create accont</h1>

                      <h4 class="text-center mt-4">Ensure your email for register</h4>
                      <v-form>
                        <v-row align="center" justify="center">
                          <v-col cols="12" md="8">
                            <v-text-field
                              label="Name"
                              name="Name"
                              prepend-icon="mdi-account"
                              type="text"
                              color="teal accent-3"
                            />
                          </v-col>
                        </v-row>
                        <v-row align="center" justify="center">
                          <v-col cols="12" md="8">
                            <v-text-field
                              label="Email"
                              name="Email"
                              prepend-icon="mdi-email"
                              type="text"
                              color="teal accent-3"
                            />
                          </v-col>
                        </v-row>
                        <v-row align="center" justify="center">
                          <v-col cols="12" md="8">
                            <v-text-field
                              label="No Handphone"
                              name
                              prepend-icon="mdi-cellphone"
                              type="text"
                              color="teal accent-3"
                            />
                          </v-col>
                        </v-row>
                        <v-row align="center" justify="center">
                          <v-col cols="12" md="8">
                            <v-text-field
                              label="Password"
                              name="Passwprd"
                              prepend-icon="mdi-lock"
                              type="password"
                              color="teal accent-3"
                            />
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded color="teal accent-3">Sign up</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
    step: 2,
  }),
  props: {
    source: String,
  },

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
        password: this.password,
      };
      console.log(auth);
      console.log(this.email);
      console.log(this.password);
      this.login(auth);
    },
    reset() {
      this.$router.push("/login");
    },
  },
};
</script>
