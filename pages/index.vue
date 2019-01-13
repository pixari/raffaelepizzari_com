<template>
  <div class="c-main-container js-main-container">
    <section-header />
    <section-intro />
    <section-expertise />
    <section-skills />
    <section-experience />
    <section-education />
    <section-contact />
  </div>
</template>

<script>
import SectionHeader from '~/components/SectionHeader.vue';
import SectionIntro from '~/components/SectionIntro.vue';
import SectionExpertise from '~/components/SectionExpertise.vue';
import SectionSkills from '~/components/SectionSkills.vue';
import SectionExperience from '~/components/SectionExperience.vue';
import SectionContact from '~/components/SectionContact.vue';
import SectionEducation from '~/components/SectionEducation.vue';

export default {
  head () {
    return {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic&subset=latin,latin-ext' },
        { rel: 'stylesheet', href: 'https://unpkg.com/font-awesome@4.7.0/css/font-awesome.min.css' }
      ]
    }
  },
  components: {
    SectionHeader,
    SectionIntro,
    SectionExpertise,
    SectionSkills,
    SectionExperience,
    SectionContact,
    SectionEducation,
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
