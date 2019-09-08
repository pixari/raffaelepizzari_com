<template>
  <section class="o-section  t-section  ">
    <div class="o-section__header-bg  t-section__header" />
    <div class="o-section__content-bg  t-section__content" />

    <div class="o-container">
      <div class="o-section__container">
        <header class="o-section__header  t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">
              Expertise
            </h2>
            <div class="o-content__body  o-section__description">
              Batman would be jealous.
            </div>
          </div>
        </header><!-- /o-section__header -->

        <div class="o-section__content  t-section__content  ">
          <div class="o-grid">
            <div
              v-for="(expertise, index) in exps"
              :key="index"
              class="o-grid__col-sm-6"
            >
              <div class="o-media  o-media--block  o-content">
                <div class="o-media__figure">
                  <div class="c-number  t-primary-color">
                    {{ expertise.num }}
                  </div>
                </div>
                <div class="o-media__body  o-content__body">
                  <h3>{{ expertise.title }}</h3>
                  <p>
                    {{ expertise.desc }}
                  </p>
                </div>
              </div><!-- /o-media o-content -->
            </div><!-- /o-grid__col -->
          </div><!-- /o-grid -->
        </div><!-- /o-section__content -->
      </div><!-- /o-section__container -->
    </div><!-- /o-container -->
  </section><!-- /o-section -->
</template>


<script>
export default {
  data () {
    return {
      exps: [
        { 
          num: '01',
          title: this.$t('SPA Development'),
          desc: this.$t('spa_development_definition'),
        },
        { 
          num: '02',
          title: this.$t('PWA Development'),
          desc: this.$t('pwa_development_definition'),
        },
        { 
          num: '03',
          title: this.$t('JavaScript Frameworks'),
          desc: this.$t('javascript_frameworks_definition'),
        },
        { 
          num: '04',
          title: this.$t('CSS Preprocessing'),
          desc: this.$t('css_preprocessing_definition'),
        },
        { 
          num: '05',
          title: this.$t('Testing/Debugging'),
          desc: this.$t('testing_debuggin_definition'),
        },
        { 
          num: '06',
          title: this.$t('Version Control/Git'),
          desc: this.$t('version_control_git_definition'),
        },
        { 
          num: '07',
          title: this.$t('Building / automation tools'),
          desc: this.$t('building_automation_tools_definition'),
        },
        { 
          num: '08',
          title: this.$t('Back-End development'),
          desc: this.$t('backend_development_definition'),
        },
        { 
          num: '09',
          title: this.$t('Mobile and Responsiveness'),
          desc: this.$t('mobile_definition'),
        },
      ],
    }
  },
}
</script>
