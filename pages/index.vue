<template>
  <div class="c-main-container js-main-container">
    <section-header />
    <section-intro />
    <section-expertise />
    <section-experience />
    <section-projects />
    <section-education />
    <section-profiles />
    <section-contact />
  </div>
</template>

<script>
import SectionHeader from '~/components/SectionHeader.vue';
import SectionIntro from '~/components/SectionIntro.vue';
import SectionExpertise from '~/components/SectionExpertise.vue';
import SectionProjects from '~/components/SectionProjects.vue';
import SectionExperience from '~/components/SectionExperience.vue';
import SectionContact from '~/components/SectionContact.vue';
import SectionEducation from '~/components/SectionEducation.vue';
import SectionProfiles from '~/components/SectionProfiles.vue';

export default {
  head () {
    return {
      title: this.$t('Raffaele Pizzari - Front-End Developer in Munich'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('site_description') },
        { 'http-equiv': 'cache-control', content: 'max-age=31536000' },
      ],
      link: [
       // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic&subset=latin,latin-ext' },
      ]
    }
  },
  components: {
    SectionHeader,
    SectionIntro,
    SectionExpertise,
    SectionExperience,
    SectionContact,
    SectionEducation,
    SectionProfiles,
    SectionProjects,
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
