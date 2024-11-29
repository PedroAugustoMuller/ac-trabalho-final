<script setup lang="ts">
import {Icon} from '@iconify/vue'
import {ref} from 'vue'
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'radix-vue'
import NavigationMenuListItem from './NavigationMenuListItem.vue'
import ModeSwitch from "~/components/Navigation/ModeSwitch.vue";

const currentTrigger = ref('')

const menus = [
  {
    title: 'Questify',
    subMenus: [
      {
        title: 'Dashboard',
        description: 'A place where you can track all your quests',
        route: '/',
      },
      {
        title: 'Habits',
        description: 'A place to create, edit or delete habits',
        route: '/habits',
      },
      {
        title: 'Calendar',
        description: 'A place where you can see your schedule',
        route: '/calendar',
      },
    ]
  },
  {
    title: 'About',
    subMenus: [
      {
        title: 'The team',
        description: '',
        route: '/About/team'
      },
      {
        title: 'The tools',
        description: '',
        route: '/About/tools'
      }
    ]
  }
]

</script>

<template>
  <NavigationMenuRoot
      v-model="currentTrigger"
      class="fixed z-40 flex w-full justify-center align-middle"
  >
    <NavigationMenuList class="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-[var(--nav-bg)] dark:bg-[var(--secondary-bg-dark)] p-1 shadow-[0_2px_10px]">
      <NavigationMenuItem
          v-for="(item, index) in menus"
          :key="index"
      >
        <NavigationMenuTrigger
            class="text-grass11 dark:text-[#1DB954] hover:bg-green3  dark:hover:bg-[#202020] focus:shadow-green7 group flex select-none items-center justify-between gap-[20px] rounded-[4px] px-3 py-4 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
        >
          {{ item.title }}
          <Icon
              icon="radix-icons:caret-down"
              class="text-green10 relative top-[1px] transition-transform duration-[250ms] ease-in group-data-[state=open]:-rotate-180"
          />
        </NavigationMenuTrigger>
        <NavigationMenuContent
            class="
            data-[motion=from-start]:animate-enterFromLeft
            data-[motion=from-end]:animate-enterFromRight
            data-[motion=to-start]:animate-exitToLeft
            data-[motion=to-end]:animate-exitToRight
            absolute top-0 left-0
            w-full sm:w-auto
            dark:bg-[var(--card-bg-dark)]"
        >
          <ul class="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[400px] sm:grid-cols-[0.75fr_1fr] dark:bg-[var(--card-bg-dark)]">
            <NavigationMenuListItem
                v-if="item.subMenus"
                v-for="(subItem,index) in item.subMenus"
                :key="index"
            >
              <NuxtLink
                  :to="subItem.route"
              >
                <div>
                  <b class="border-b dark:border-[var(--text-highlight)] dark:text-[var(--text-dark)]">{{ subItem.title }}</b>
                  <p class="dark:text-[var(--text-secondary-dark)]">{{ subItem.description }}</p>
                </div>
              </NuxtLink>
            </NavigationMenuListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
            class="text-grass11 dark:text-[#1DB954] hover:bg-green3 dark:hover:bg-[#202020] focus:shadow-green7 block select-none rounded-[4px] px-3 py-4 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="https://github.com/PedroAugustoMuller/ac-trabalho-final"
            target="_blank"
        >
          Github
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem
          class="m-2"
      >
        <ModeSwitch/>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <nuxt-img
            class=" mx-2 w-12 rounded-full"
            src="https://github.com/PedroAugustoMuller.png"
        ></nuxt-img>
      </NavigationMenuItem>
      <NavigationMenuIndicator
          class="data-[state=hidden]:opacity-0 duration-200 data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-40 flex h-[10px] items-end justify-center overflow-hidden transition-[all,transform_250ms_ease]"
      >
        <div class="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white"/>
      </NavigationMenuIndicator>
    </NavigationMenuList>

    <div class="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
      <NavigationMenuViewport
          class="dark:bg-[var(--card-bg-dark)] data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[10px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]"
      />
    </div>
  </NavigationMenuRoot>
</template>

<style>

</style>