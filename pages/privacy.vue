<script setup>
  import Navbar from '~/components/Navbar/Navbar.vue'
  const privateUse=['manage the website;', 'create and manage your user account;', 'refine, evaluate, and enhance our business products and services, particularly to provide you with comprehensive and updated information in the energy industry;', 'maintain and improve our business relationship with you;', 'resolve any query, complaint, or feedback you may have;', "carry out research, surveys, or promotions, where necessary;", 'prevent and detect fraudulent activities;', 'prevent and detect technical issues; and','comply with legal and regulatory requirements.']

  const privateShare = ['The website is designed to provide a one-stop marketplace for every data and information in the energy industry including market trends, news and operations. Thus, information may be made available to you in collaboration with our trusted third-party partners as far as they agree to keep your personal information confidential.', 'We may disclose your personal information in compliance with requisite laws, to protect our internal business policies;','professional advisors including lawyers, IT personnel, business consultants, etc, on a need-to-know basis;','our employees on a need-to-know basis;', 'We may disclose your personal information in compliance with requisite laws, to protect our internal business policies;','We may disclose your personal information in compliance with requisite laws, to protect our internal business policies;','professional advisors including lawyers, IT personnel, business consultants, etc, on a need-to-know basis;', 'our employees on a need-to-know basis;','companies or other organisations that we have employed to renders services on our behalf. For example, analytics providers, web-hosting entities, mailing vendors, and information technology providers;','companies or organisations you have requested us to or accepted that we may share your personal information with;', 'a law enforcement agency, court, or regulatory authority or other third party where we reasonably believe it is necessary to comply with a legal or regulatory obligation, to protect your rights, the rights of any third party or individuals','personal safety, or to detect, prevent, fight fraud, security or safety issues; or', 'any third party that acquires, or to which we transfer, all of our assets and business. Where such a sale or transfer occurs, we will reasonably ensure that the acquiring entity uses your personal information in a manner that is consistent with this Policy.']

  const rights = ['Right to access your personal information;','Right to authorize us to move, copy, or transfer your personal information.','Right to have any inaccurate personal information amended;',
'Right to request the erasure of your personal information;', 'Right to restrict our use of your personal information;']
</script>

<template>
  <section class="flex flex-col items-center">
    <Navbar/>
    <div class="w-8/10 flex flex-col gap-5 mt-10">
      <h1 class="text-[4em] font-extrabold">Privacy policy</h1>

  <article>
    <p>
      This Website Privacy Policy (the "Policy") explains how koriki Analytics Technologies Limited ("koriki", "we", "our" or "us") uses and discloses your personal information collected when you visit our website.
    </p>

    <p>
      This Policy is a legally binding document between you and koriki. By clicking on the “Accept” button or using the website, you agree to be bound by the terms of this Policy. This Policy applies only to the personal information collected on our website.
    </p>
  </article>
  <article>
    <h6>INFORMATION WE COLLECT</h6>

  <p>
    We collect your personal information i.e. information that identifies you as an individual, which includes your name, phone number, email address, information about your business or employer (as applicable), IP address, geographical location, browser type, browser version, operating system, duration and number of visits, website navigation, and other statistics.
  </p>
  </article>


  <article>
    <h6>USE OF COOKIES</h6>

  <p>
    Personal information we collect is typically by the use of cookies (or a similar technological tool) to help us to identify and track our website users upon each visit, understand and save their preferences for subsequent visits, compile data about site traffic and interaction, in order to provide a better user experience. In addition, when you register on our website, subscribe to our newsletter, respond to a survey or complete a fill, we also collect your personal information.
  </p>
  </article>


  <article>
    <h6>THE USE TO WHICH WE PUT YOUR PERSONAL INFORMATION</h6>

    <p>We use your personal information for any of the following. To:</p>

    <ul>
      <li v-for="i in privateUse" :key="i">{{ i }}</li>
    </ul>
  </article>


      



  <article>
    <h6>WHO WE SHARE YOUR PERSONAL INFORMATION WITH</h6>

    <p>We will not sell, exchange, trade, or transfer to third parties, your personal information, except as stated in this Policy. Your personal information also may be disclosed to:</p>

    <ul>
      <li v-for="i in privateShare" :key="i">{{ i }}</li>
    </ul>
  </article>


    



  <article>
    <h6>HOW LONG WE WILL KEEP YOUR PERSONAL INFORMATION</h6>

  <p>We will keep your personal information as long as they are reasonably needed to render our services to you, to defend our legal rights or as otherwise required by relevant laws. Otherwise, we will destroy the personal information. However, even if we destroy the data, it may remain in our archives for legal or regulatory purposes.</p>
  </article>


  <article>
    <h6>YOUR RIGHTS</h6>

    <p>Your rights in relation to your personal information include the following:</p>

    <ul>
      <li v-for="i in rights" :key="i">{{ i }}</li>
    </ul>
  </article>

  



  <article>
    <h6>HOW WE PROTECT YOUR PERSONAL INFORMATION</h6>

    <p>We undertake reasonably necessary security measures to protect against misuse, unauthorised access to, alteration, disclosure or destruction of your personal information. These include use of secured firewalls, password protection of servers and periodic internal reviews of our information collection, storage and processing practices. However, we cannot guarantee a foolproof protection of your personal information.</p>
  </article>


  <article>
    <h6>THIRD PARTY LINKS</h6>

    <p>Our website may contain third party advertising or hyperlinks to other websites. We do not disclose your personal information to these websites. We therefore exclude any liability for loss that you may suffer as a result of the content and activities of these linked websites.</p>
  </article>


  <article>
    <h6>REVIEW OF THIS PRIVACY POLICY</h6>

    <p>We reserve the right to occasionally review this Policy. If we make significant changes to it, we will communicate providing a prominent notice on the website or by notifying you through your provided email address. Should you continue to use our website after any review, it will be deemed an acknowledgment of the revised policy and you will be bound by it. However, if you do not agree with the changes, please do not continue to use the website.</p> 
  </article>

  <article>
    <h6>GOVERNING LAW</h6>

    <p>This Policy will be governed by the laws of the Federal Republic of Nigeria.</p>
  </article>

  <article>
    <h6>TERMS OF SERVICE</h6>

    <p>Please visit our Terms of Service which establishes the terms governing the services we offer.</p>
  </article>


  <article>
    <h6>CONTACT US</h6>
    <p>If you have any questions about this Policy, please contact us via:</p>
    <p>Email: hello@koriki.io</p>
    <p>Telephone: +234 81 7607 4520</p>
  </article>
    </div>
    <SectionSeven class="w-screen mt-10"/>
  </section>
</template>

<style scoped>
  h6{
    font-weight: 700;
    font-size: x-large;
    font-family: var(--font-hubot);
  }

  article{
    display: flex;
    flex-direction: column;
    gap: 20px
  }

  ul{
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: circle ;
    color:black;
    padding: 0 0 0 50px;
    font-weight: 500;
    font-size: large;
  }
  p{
    font-weight: 500;
    font-size: large;
  }
</style>