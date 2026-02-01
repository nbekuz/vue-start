<script setup>
import { computed, ref } from "vue";
import locales from "../../locales";
import {
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  BellAlertIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";
import Logo from "../../components/icons/logo.vue";

const phone = ref("");
const lang = ref("uz"); // default UZ

const t = computed(() => locales[lang.value]);

const handleLogin = () => {
  console.log("Kirish:", { phone: "+998" + phone.value, lang: lang.value });
  // API chaqirish logikasi
};
</script>

<template>
  <div class="w-full bg-white overflow-hidden h-screen">
    <div class="grid grid-cols-1 lg:grid-cols-2 h-full">
      <!-- LEFT SIDE -->
      <section class="relative p-10 lg:p-12 text-primary-foreground bg-primary h-full">
        <div class="relative">
          <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-2">
              <Logo class="text-2xl text-primary-foreground" />
              <h2 class="text-primary-foreground/80 mb-0! text-xl">
                {{ t.auth.leftSub }}
              </h2>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-3xl font-extrabold">{{ t.auth.welcome }}</h3>
            <p class="mt-3 text-primary-foreground/80 text-lg max-w-md">
              {{ t.auth.leftDesc }}
            </p>
          </div>

          <div class="mt-10 space-y-5">
            <div class="flex items-start gap-4">
              <div class="rounded-2xl bg-white/12 border border-white/15 p-3">
                <CalendarDaysIcon class="w-6 h-6" />
              </div>
              <div>
                <div class="font-semibold text-lg leading-snug">
                  {{ t.auth.f1Title }}
                </div>
                <div class="text-primary-foreground/75">
                  {{ t.auth.f1Desc }}
                </div>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="rounded-2xl bg-white/12 border border-white/15 p-3">
                <ClipboardDocumentCheckIcon class="w-6 h-6" />
              </div>
              <div>
                <div class="font-semibold text-lg leading-snug">
                  {{ t.auth.f2Title }}
                </div>
                <div class="text-primary-foreground/75">
                  {{ t.auth.f2Desc }}
                </div>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="rounded-2xl bg-white/12 border border-white/15 p-3">
                <ChartBarIcon class="w-6 h-6" />
              </div>
              <div>
                <div class="font-semibold text-lg leading-snug">
                  {{ t.auth.f3Title }}
                </div>
                <div class="text-primary-foreground/75">
                  {{ t.auth.f3Desc }}
                </div>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="rounded-2xl bg-white/12 border border-white/15 p-3">
                <BellAlertIcon class="w-6 h-6" />
              </div>
              <div>
                <div class="font-semibold text-lg leading-snug">
                  {{ t.auth.f4Title }}
                </div>
                <div class="text-primary-foreground/75">
                  {{ t.auth.f4Desc }}
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10 text-sm text-primary-foreground/70 flex items-center gap-2">
            <ShieldCheckIcon class="w-4 h-4" />
            <span>{{ t.auth.version }}</span>
          </div>
        </div>

        <!-- Bottom area: footer left + language right (Ant) -->
        <div
          class="absolute left-10 right-10 bottom-8 lg:left-12 lg:right-12 flex items-end justify-between gap-4"
        >
          <div class="text-xs text-primary-foreground/70">
            © 2024 Tib Markazi Admin. Barcha huquqlar himoyalangan.
          </div>

          <a-radio-group v-model:value="lang" button-style="solid" size="small" class="lang-group">
            <a-radio-button value="uz" class="lang-btn">
              <span class="inline-flex items-center gap-2">
                <span class="text-base leading-none">🇺🇿</span>
                <span class="font-semibold">UZ</span>
              </span>
            </a-radio-button>
            <a-radio-button value="ru" class="lang-btn">
              <span class="inline-flex items-center gap-2">
                <span class="text-base leading-none">🇷🇺</span>
                <span class="font-semibold">RU</span>
              </span>
            </a-radio-button>
          </a-radio-group>
        </div>
      </section>

      <!-- RIGHT SIDE -->
      <section class="p-6 lg:p-12 flex items-center justify-center">
        <div class="w-full max-w-md">
          <div class="mb-8">
            <h1 class="text-4xl font-extrabold text-foreground">
              {{ t.auth.loginTitle }}
            </h1>
            <p class="mt-2 text-muted">{{ t.auth.loginSub }}</p>
          </div>

          <!-- form wrapper -->
          <div class="bg-white rounded-2xl border border-black/5 shadow-sm p-6">
            <a-form layout="vertical" @finish="handleLogin">
              <a-form-item
                :label="t.auth.phoneLabel"
                name="phone"
                :rules="[
                  { required: true, message: t.auth.phoneHint },
                  { pattern: /^[0-9]{9}$/, message: t.auth.phoneHint },
                ]"
              >
                <!-- Ant Input with prefix +998 -->
                <a-input
                  v-model:value="phone"
                  size="large"
                  placeholder="901234567"
                  inputmode="numeric"
                  class="phone-input"
                >
                  <template #addonBefore>
                    <div class="flex items-center gap-2">
                      <span class="text-lg leading-none">🇺🇿</span>
                      <span class="font-extrabold text-foreground">+998</span>
                    </div>
                  </template>
                </a-input>

                <div class="mt-2 text-sm text-muted">
                  {{ t.auth.phoneHint }}
                </div>
              </a-form-item>

              <a-button
                html-type="submit"
                type="primary"
                block
                size="large"
                class="send-btn"
              >
                {{ t.auth.sendCode }}
              </a-button>

              <p class="text-center text-sm text-muted mt-4">
                {{ t.auth.smsInfo }}
              </p>
            </a-form>
          </div>

          <div class="mt-8 pt-8 border-t border-black/5 text-center">
            <p class="text-muted mb-3">{{ t.auth.helpQ }}</p>

            <!-- You can keep this as plain button, or make it Ant too -->
            <a-button type="link" class="help-link">
              <span class="inline-flex items-center gap-2 font-bold text-secondary-foreground">
                {{ t.auth.helpBtn }} <ArrowRightIcon class="w-4 h-4" />
              </span>
            </a-button>
          </div>

          <div class="mt-10 text-center text-sm text-muted">
            {{ t.auth.footer }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

