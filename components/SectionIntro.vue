<template>
  <section class="o-section  t-section  ">
    <div class="o-section__header-bg  t-section__header" />
    <div class="o-section__content-bg  t-section__content" />

    <div class="o-container">
      <div class="o-section__container">
        <header class="o-section__header  t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">
              {{ $t('Intro') }}
            </h2>
            <div class="o-content__body  o-section__description">
              {{ $t('What I am all about.') }}
            </div>
          </div>
        </header><!-- /o-section__header -->

        <div class="o-section__content  t-section__content  ">  
          <div class="o-content">
            <div class="c-intro">
              <!-- EN -->
              <div
                v-if="$i18n.locale === 'en'"
                class="o-content__body"
              >
                <p>
                  I’m a highly motivated <strong>Front-End Developer</strong> with over 16 years of experience, especially <strong>passionate about JavaScript</strong>.
                </p>
                <p>
                  I was <strong>founder and CEO of the EgoRego Internet Company</strong>, based in Rome (Italy), founded in 2007. We've made a reputation for planning successful communication strategies, coding rich Websites, increasing business through social media marketing. I learned how to efficiently manage a project, how to lead a team and deal with customers.
                </p>
                <p>
                  I truly believe in the <strong>value of sharing knowledge</strong>. <br>
                  That's why I enjoy contributing to <strong>open source projects</strong>, supporting some junior developers as <strong>mentor</strong> and giving <strong>free talks</strong> about technical topics.
                </p>
                <p>
                  My educational background includes a bachelor degree in Communication and Media Studies and a master degree in Production cultures, publishing and multimedia.
                </p>
                <p>
                  I believe in <strong>teamwork</strong>. Different team members contribute different perspectives and the synergy between team members can produce creative and productive results.
                </p>
                <p>
                  I'm familiar with working across functional (development/testing, deployment, systems/infrastructure) and project teams to ensure continuous operation of build and test systems.
                </p>
              </div>
            </div>
          </div>
        </div><!-- /o-section__content -->
      </div><!-- /o-section__container -->
    </div><!-- /o-container -->
  </section><!-- /o-section -->
</template>