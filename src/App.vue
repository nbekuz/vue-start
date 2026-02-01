<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

function cssVar(name: string) {
  // name: '--color-primary' kabi
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

const ready = ref(false);

const antTheme = computed(() => {
  // agar CSS hali yuklanmagan bo'lsa, bo'sh chiqishi mumkin
  const primary = cssVar("--color-primary") || "#2C3E50";
  const text = cssVar("--color-foreground") || "#1E293B";
  const muted = cssVar("--color-muted") || "#94A3B8";
  const bg = cssVar("--color-background") || "#F8FAFC";
  const secondary = cssVar("--color-secondary") || "#E3F2FD";
  const secondaryText = cssVar("--color-secondary-foreground") || "#1565C0";
  const danger = cssVar("--color-destructive") || "#EF4444";

  return {
    token: {
      colorPrimary: primary,
      colorInfo: primary, // link/notification info ham primary bo'lsin
      colorText: text,
      colorTextSecondary: muted,
      colorBgBase: bg,
      colorBgContainer: "#FFFFFF",
      colorBorder: "rgba(0,0,0,0.08)",
      colorError: danger,

      borderRadius: 12,
      fontSize: 14,
      controlHeight: 40,
    },

    components: {
      Button: {
        borderRadius: 12,
        controlHeight: 48, // large buttonlar chiroyli
        colorPrimary: primary,
      },
      Input: {
        borderRadius: 12,
        controlHeight: 48,
        colorBgContainer: "#FFFFFF",
      },
      Radio: {
        borderRadius: 12,
        colorPrimary: primary,
      },
      Select: {
        borderRadius: 12,
        controlHeight: 48,
      },
      Form: {
        labelColor: text,
      },
      Typography: {
        colorText: text,
      },
      Tag: {
        colorFillSecondary: secondary,
        colorText: secondaryText,
      },
    },
  };
});

onMounted(() => {
  // CSS variables aniq o‘qilishi uchun mountdan keyin ready qilamiz
  ready.value = true;
});
</script>

<template>
  <!-- ready bo'lmaguncha tokenlar bo'sh ketib qolmasin -->
  <a-config-provider v-if="ready" :theme="antTheme">
    <router-view />
  </a-config-provider>

  <router-view v-else />
</template>
