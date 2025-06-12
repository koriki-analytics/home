<script setup>
  import Navbar from '~/components/Navbar/Navbar.vue'
  const ownership=['not do anything which does or might reduce the value of or disparage our intellectual property or challenge our ownership of it.', 'promptly notify us of any suspected infringement of our intellectual property rights;', 'not copy, or make any alteration to any part of the software code or any portions of the Website;', 'not use the software code in any way not contemplated by the Terms;', 'not give access to the software code to any other person than you, the licensee in these Terms;', "in any way provide any information about the software code to any other person.", '    not use the intellectual property except as contemplated by the Terms or in our interest.']

  const representations = ['all registration details you provide to us are true, accurate, updated and complete', 'you will ensure that the details are correct and are promptly updated at all times;','you have the legal capacity to agree to these Terms and Conditions;','you are not under the age of 18;', 'you are not a minor in your jurisdiction of residence','you will not access the Website through automated or non-human medium such as an internet bot, program or script;', 'you will not use the website for any illegal, immoral or unauthorized purpose;','your use of the website will not contravene any relevant law or regulation.',]

  const website = ['monitor, investigate, or check our Website for violations of the Terms and Conditions.','take appropriate legal action against anyone who is in violation of the applicable law or these Terms and Conditions, including reporting the defaulting user to law enforcement authorities.','refuse, restrict access to, limit the availability of, or disable any of your contributions or reviews.',
'remove from the Website or otherwise disable all files, content, and information that are excessive in size or are in any way posing a burden to our systems.', 'manage the Website in a manner designed to protect our intellectual property rights and to accelerate the operation of the Website.']

const guidelines = ['you should have firsthand experience of the subject matter for which your review is requested.','your reviews should not contain any unpleasant, rude, offensive, profane, abusive, racist, or hate language.','your reviews should not be discriminatory against religion, race, gender, national origin, age, marital status, sexual orientation, or disability.',
'your reviews should not refer to illegal activities.', 'you should not make any conclusions as to the legality of conduct.','you should not make false or misleading reviews.','you should not organize a campaign encouraging others to post reviews, whether positive or negative.']

const restricted = ['reclaim data or other content from the Website to develop or collate, directly or indirectly, a compendium, compilation, database, or directory of information without our prior written consent.','make any unauthorized utilization of the Website, such as collecting usernames and/or email addresses of users without their permission by electronic or other means with the aim of sending phishing emails or creating user accounts by automated means.','link to our Website in any way that would cause the appearance or presentation of our Website to be at variance with what would be seen by a user who accessed our Website by typing the URL into a standard browser.',
'use a buying agent to make purchases on the Website or access our Services.', 'use the Website to advertise or offer your merchandise and services for sale.','circumvent, disable, or interfere with security-related functionalities of the Website, such as functionalities that prevent or limit the utilisation or reproduction of any content or enforce restrictions on the use of the Website or its content.','engage in unauthorized framing of or hyperlinking to the Website.', 'swindle, deceive, or mislead us and other users, in order to gain sensitive account information such as user passwords.', 'make inappropriate use of our support services or submit fabricated reports of abuse or misconduct;','share any login details to our Website with a third party;', 'engage in any automated utilization of the Website, including using website bots, or scripts to send comments or messages, or similar technological tools;','interfere with, upset, or create an unwarranted problem on the Website or the networks or services connected to the Website;','impersonate another user, misrepresent your identity, age, or affiliation with another person, or use the username of another user to access the Website or Services;', 'sell or transfer your user account to another person;','use any information obtained from the Website to harass, derogate, abuse, or cause damage to another person;','use the Website or its content to compete with us or for any revenue-generating or business enterprise not intended by us;','decompile, undo, or reverse any software that makes up the Website;','attempt to circumvent any element of the Website designed to prevent or limit access to the Website, or any part of it;','harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any part of the Website or our Services to you;','erase any proprietary rights notice from any content;','duplicate or adapt the Website’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code;','upload or transfer (or attempt to upload or to transmit) viruses, or any other material, that interferes with another user’s uninterrupted use and enjoyment of the Website or hinders the operation, or maintenance of the Website;','denigrate, tarnish, or otherwise cause damage, in our opinion, to us and/or the Website;','use the Website in a manner that is inconsistent with any relevant laws or regulations;','use our Website to incite another person to commit a crime;','use our Website or its content in a commercial audio, video or music files;','use our Website in an obscene, offensive, threatening, violent, malicious or defamatory manner;','use our Website for sexually explicit or pornographic purposes;']
</script>

<template>
  <section class="flex flex-col items-center">
    <Navbar/>
    <div class="w-8/10 flex flex-col gap-5 mt-10">
      <h1 class="text-[4em] font-extrabold">Terms and Conditionsy</h1>

  <article>
    <p>This website is owned and managed by Koriki Analytics Technologies Limited ("Koriki", "we", "our" or "us") (“Website”). </p>
    <p>
      These Terms and Conditions constitute a legally binding agreement between you and Koriki. By clicking on the “Accept” button, accessing, visiting or using our Website, you agree to be bound by the Terms and Conditions set out below. Subject to these Terms and Conditions, we agree to offer you some of all of the services described in our Website (“Services”).
    </p>

    <p>
      These Terms and Conditions are created for users who are 18 years and above. Individuals that are below the age of 18 years are not allowed to use, register or become a beneficiary of the Services provided by our Website.
    </p>
  </article>
  <article>
    <h6>OWNERSHIP OF INTELLECTUAL PROPERTY RIGHTS</h6>

  <p>
    Except as otherwise stated, the Terms and Conditions do not grant any intellectual property rights in the Website and its related software, to you. All rights, titles and interests including intellectual property rights and all other rights in relation to the Website, related software, every source code, web design, service marks, trademarks, trade names, logos, images, patents, trade secrets, inventions, copyrights, audio, photographs, video, text are solely and exclusively owned by Koriki. You undertake not to make any claim to the aforementioned rights. You agree to indemnify and keep indemnified, Koriki, for any claims for infringement, misappropriation or any other violation of any intellectual property rights by a third party, against Koriki arising as a result of the use of the Website or Services offered by Koriki to you.
  </p>
  <p>
    In the event that you become aware of or create any intellectual property or other proprietary rights arising out of the Terms and Conditions, those rights are exclusive to Koriki. If Koriki cannot be considered as author or owner of those rights for any reason, such rights are automatically assigned to Koriki at their creation by the Terms and Conditions, and the moral rights therein, if any, are waived forthwith.
  </p>
  <p>
    You agree that at all times you will:
  </p>
  <ul>
    <li v-for="i in ownership" :key="i">{{ i }}</li>
  </ul>
  
  </article>


  <article>
    <h6>NO REPRODUCTION CLAUSE</h6>

  <p>
    Except as otherwise permitted hereunder, no part of the proprietary materials may be copied, posted, reproduced, aggregated, republished, uploaded, publicly displayed, licensed, translated, transmitted, distributed, sold, or exploited for any commercial purpose without our prior written consent.
  </p>
  <p>
    Provided that you are a registered user of our Website, you are hereby granted a limited licence to access and use the Services we provide and to download or print a copy of any portion of the information to which you have properly gained access solely for personal use as an individual or a corporate body. This licence is conditional upon your not portraying us in a false, misleading, derogatory, or otherwise offensive manner, graphic or trademark of ours as part of the link without our express written consent. We reserve the rights not expressly granted to you in and to the Website, Services, the information and the other proprietary materials.
  </p>
  </article>


  <article>
    <h6>REGISTRATION OF USER</h6>

    <p>You hereby agree to register as a user on our website before accessing the Services. </p>

    <p>You further undertake to keep your password confidential and take responsibility for the use of your account and password. You should ensure to immediately apprise us of any actual or prospective compromise of your user account or password.</p>
    <p>
      We reserve the right to remove, delete, terminate, or change a username you select if, in our sole discretion, such username is inappropriate, improper or unpleasant
    </p>
  </article>


      



  <article>
    <h6>USER REPRESENTATIONS</h6>

    <p>You hereby make the following representations and warranties:</p>

    <ul>
      <li v-for="i in representations" :key="i">{{ i }}</li>
    </ul>
    <p>
      In the event that you submit to us any details that are incorrect, false, obsolete, or incomplete, we reserve the right to suspend, erase or terminate your account and refuse any and all current or future access to the website and enjoyment of the Services.
    </p>
  </article>



  <article>
    <h6>RESTRICTED USER ACTIVITIES</h6>

    <p>You may not access, visit or use the Website for any purpose other than that for which the website was created. You hereby undertake not to:</p>
    <ul>
      <li v-for="i in restricted" :key="i">{{ i }}</li>
    </ul>
  </article>

  <article>
    <h6>GUIDELINES FOR REVIEWS</h6>

    <p>We may prompt you to leave reviews or ratings of our Website or Services. While posting a review, you must comply with the following guidelines:</p>

    <ul>
      <li v-for="i in guidelines" :key="i">{{ i }}</li>
    </ul>
    <p>We may, in our sole discretion, accept, reject, or remove your review(s). We are not dutybound to monitor, screen or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Please note that reviews are not endorsed by us, and do not represent our opinions in any way.</p>
    <p>We exclude any liability for any review or for any claims, liabilities, or losses arising from any review. By submitting a review, you grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, assignable, and sublicensable right and licence to copy, reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to reviews.</p>
  </article>

  <article>
    <h6>THIRD PARTY LINKS</h6>

    <p>Our website may contain third party advertising or hyperlinks to other websites. These third party websites and content are not scrutinised, monitored, or checked for accuracy, appropriateness, or completeness by us, thus, we exclude any liability for loss that you may suffer as a result of the content and activities of these linked websites. Incorporation of, linking to, any third party websites or content does not imply our approval or endorsement by us. Any access to, use or visit to them is at your own risk, and you should be aware these Terms do not govern them. You are expected to review the applicable terms and policies, including privacy and data gathering practices, of any website to which you access from our Website.</p>
  </article>


  <article>
    <h6>WEBSITE MANAGEMENT</h6>

    <p>Notwithstanding any provisions of the Terms, we reserve the right, but not the obligation, to, in our sole discretion:</p>

    <ul>
      <li v-for="i in website" :key="i">{{ i }}</li>
    </ul>
    <p>If you are offended by any content on our Website or our Services, please submit your complaint to us through the details provided below. We shall aim to rectify the matter as soon as practicable. However, if any complaint is frivolous vexatious, you will indemnify us of the cost of conducting the investigation.</p>
  </article>

  <article>
    <h6>PRIVACY POLICY</h6>

    <p>By using our Website and accessing our Services, you agree to be bound by our Privacy Policy, which is incorporated into these Terms and Conditions. Please review our Privacy Policy here.</p>
  </article>

  <article>
    <h6>COPYRIGHT INFRINGEMENT NOTIFICATION</h6>

    <p>We regard the intellectual property rights of other persons. Therefore, if you believe that any information available on or through our Website infringes upon any copyright you own or control, please promptly notify us using the contact information provided below.</p>
  </article>

  <article>
    <h6>TERM AND TERMINATION</h6>

    <p>These Terms and Conditions shall remain valid and binding while you access the Website and our Services. We reserve the right to, in our sole discretion and without notice or liability, restrict and terminate your access to and use of the Website and our Services, for any reason or for no reason, including for breach of any representation, warranty, or covenant contained in these Terms or of any applicable law or regulation. We may terminate your use or participation in the Website or our Services or erase your user account at any time, without warning, in our sole discretion.
    If we terminate, erase or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. Additionally, we reserve the right to take appropriate legal action, including pursuing civil, criminal, and injunctive redress against you.</p>
  </article>
  
  <article>
    <h6>MODIFICATIONS AND INTERRUPTIONS</h6>

    <p>We reserve the right to change, modify, or remove the Website or the contents of the Website at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Website. We also reserve the right to modify or discontinue all or part of our Services without notice at any time. We will not be liable to you or any third party for any loss, damage, or inconvenience cause by such modification, price change, suspension, or discontinuance of the content, our Services or the Website itself. Nonetheless, any of such discontinuance will be done in consideration of your existing paid subscription to our Services.</p>
    <p>
      We also cannot guarantee that the Website will be available at all times. We may experience hardware, software, or other related issues or need to perform routine maintenance on the Website thereby leading to interruptions, delays, or errors. Where we may interrupt the Services or Website, we will give you reasonable notice if this is possible and when we reasonably believe that the down time is such as to justify notifying you. You agree that the Services may also be interrupted for many reasons beyond our control, and that will not be liable to you for any loss, foreseeable or not, arising from any interruption to the Services.
    </p>
    <p>We however reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Website.</p>
    <p></p>
  </article>

  <article>
    <h6>RECTIFICATION OF ERRORS</h6>

    <p>Information provided on the Website may contain typographical errors, technical inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We would appreciate it if you brought to our immediate attention, any that you find. We reserve the right to rectify such errors, inaccuracies, or omissions and to change or update the information on the Website at any time, without prior notice</p>
  </article>


  <article>
    <h6>DISCLAIMER</h6>

    <p>THE WEBSITE IS PROVIDED TO YOU ON AN “AS-IS” AND “AS-AVAILABLE” BASIS AND WITH ALL FAULTS AND DEFECTS WITHOUT WARRANTY OF ANY KIND. YOU AGREE THAT YOUR USE OF THE WEBSITE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE WEBSITE AND YOUR USE OF IT, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, USEFULNESS TO YOU, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT MAKE ANY WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE WEBSITE’S CONTENT OR THE CONTENT OF ANY THIRD PARTY WEBSITES LINKED TO OUR WEBSITE AND WE WILL NOT BE LIABLE OR RESPONSIBLE FOR ANY (A) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (B) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE WEBSITE OR ANY INFORMATION YOU TAKE THEREFROM, (C) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (D) ANY INTERRUPTION OR INACCESSIBILITY OF TRANSMISSION TO OR FROM THE WEBSITE, (D) ANY BUGS, VIRUSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE WEBSITE BY ANY THIRD PARTY, (E) CONDUCT OF ANY USER, (F) THIRD PARTY ADVERTISEMENTS WHICH ARE POSTED ON OUR WEBSITE OR THROUGH OUR SERVICES, (G) FAILURE OR MALFUNCTION OF COMPUTER HARDWARE OR SOFTWARE OR TECHNICAL EQUIPMENT OR SYSTEM CONNECTED DIRECTLY OR INDIRECTLY TO YOUR USE OF THE SERVICES, AND/OR (H) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH OUR WEBSITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND ENDEAVOUR, AND EXERCISE CAUTION WHERE APPROPRIATE.</p>
  </article>


  <article>
    <h6>LIMITATION OF LIABILITY</h6>

    <p>IN NO EVENT WILL WE OR OUR REPRESENTATIVES BE LIABLE TO YOU OR ANY OTHER PARTY FOR CONSEQUENTIAL, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE OR ENHANCED DAMAGES, LOST PROFITS OR REVENUES, OR DIMINUTION IN VALUE, ARISING OUT OF OR RELATING TO ANY BREACH OF THE TERMS REGARDLESS OF: (A) WHETHER THE DAMAGES WERE FORESEEABLE; (B) WHETHER OR NOT WE WERE ADVISED OF THE POSSIBILITY OF THE DAMAGES AND (C) THE LEGAL OR EQUITABLE THEORY (CONTRACT, TORT OR OTHERWISE) ON WHICH THE CLAIM IS BASED, AND NOTWITHSTANDING THE FAILURE OF ANY AGREED OR OTHER REMEDY OF ITS ESSENTIAL PURPOSE.</p>
    <p>NOTWITHSTANDING ANY PROVISION TO THE CONTRARY, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE MONTH BEFORE ANY CAUSE OF ACTION ARISING.</p>
  </article>

  <article>
    <h6>INDEMNIFICATION</h6>

    <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of your failure to comply with the relevant laws, use of the Website, breach of these Terms and Conditions, any breach of your representations and warranties set forth in these Terms and Conditions; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Website; any act, neglect or default by any agent, employee, licensee or customer of yours;</p>
    <p>Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any action for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such indemnification claims. We will use reasonable efforts to inform you of any such claim, action, or proceeding which is subject to this indemnification once we become aware of it.</p>
  </article>

  <article>
    <h6>USER DATA</h6>

    <p>We will maintain certain data that you transmit to the Website for the purpose of managing the Website, as well as data relating to your use of the Website. While we undertake periodic routine backups of data, you are solely responsible for all data that you transmit to us or that relates to any activity you have undertaken while using the Website or our Services.</p>
    <p>You acknowledge that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of claim against us arising from any such loss or corruption of such data.</p>
    <p>With respect to how we handle your personal data, please refer to our Privacy Policy here.</p>
  </article>


  <article>
    <h6>BREACH OF TERMS AND CONDITIONS</h6>

    <p>If you breach our Website’s Terms and Conditions, we shall institute a legal action against you, terminate your user account, decline your access to our Website and/or cancel your subscription to our Services.</p>
  </article>


  <article>
    <h6>MISCELLANEOUS</h6>

    <p>These Terms and Conditions and any other policies posted by us on the Website constitute the entire agreement and understanding between you and us.</p>
    <p>No failure or delay on our part in exercising any right, power or privilege hereunder will constitute or be deemed to be a waiver thereof, nor will any single or partial exercise of any right, power or privilege preclude any other or further exercise thereof or the exercise of any other right, power or privilege. No waiver of any term, provision or condition of these Terms and Conditions shall be effective except to the extent made in writing and signed by us.</p>
    <p>These Terms and Conditions operate to the maximum extent permissible by law. We may assign, transfer or convey any or all of our rights and obligations to others at any time.</p>
    <p>The provisions of these Terms and Conditions shall be deemed to be severable, and if any term, condition, phrase or portion of these Terms and Conditions shall be determined to be unlawful or otherwise unenforceable, the remainder of these Terms and Conditions shall remain in full force and effect, so long as the clause severed does not affect our collective intent.</p>
    <p>Nothing in these Terms and Conditions shall (i) be deemed to constitute a partnership in law between us; (ii) constitute either of us the agent of the other for any purpose; or (iii) entitle either of us to commit or bind the other (or any member of its respective group) in any manner</p>
    <p>You hereby waive any and all defenses you may have based on the electronic form of these Terms and Conditions and the lack of signing by you and us hereto to execute these Terms and Conditions.</p>
    <p>Our rights and obligations set out in these Terms and Conditions shall pass to any permitted successor-in-title.</p>
    <p>Any obligation, duty or responsibility in these Terms and Conditions intended to continue to have effect after termination or completion shall so continue.</p>
    <p>These Terms and Conditions do not give any right to any third party.</p>
  </article>


  <article>
    <h6>REVIEW OF THIS PRIVACY POLICY</h6>

    <p>We reserve the right to occasionally review this Policy. If we make significant changes to it, we will communicate providing a prominent notice on the website or by notifying you through your provided email address. Should you continue to use our website after any review, it will be deemed an acknowledgment of the revised policy and you will be bound by it. However, if you do not agree with the changes, please do not continue to use the website.</p> 
  </article>

  <article>
    <h6>REVIEW OF THESE TERMS AND CONDITIONS</h6>

    <p>We reserve the right to occasionally review these Terms and Conditions. If we make significant changes to it, we will communicate providing a prominent notice on the website or by notifying you through your provided email address. Should you continue to use our website after any review, it will be deemed an acknowledgment of the revised terms and conditions, and you will be bound by it. However, if you do not agree with the changes, please do not continue to use the Website. </p>
  </article>

  <article>
    <h6>GOVERNING LAW AND DISPUTE RESOLUTION</h6>

    <p>The construction, performance, execution and enforcement of the Terms and any dispute of whatsoever nature arising in connection with the Terms or performance shall be governed by the laws of the Federal Republic of Nigeria.</p>
    <p>We aim to employ our endeavours to settle any dispute or ambiguity that may arise from the Terms at a meeting(s).</p>
    <p>Where we are unable to settle the dispute by negotiation within fifteen (15) days of commencing negotiation or convene a meeting for the purpose of the negotiation, such dispute shall be referred to a single Arbitrator in accordance with the provisions of the Arbitration and Conciliation Act Cap A18, Laws of the Federation of Nigeria, 2004. A single arbitrator shall be appointed by us, failing which the arbitrator shall be appointed by the Chief Judge of the Federal High Court.</p>
    <p>The venue for arbitration shall be Lagos, Nigeria, and the language of arbitration shall be English. We shall be bound by the arbitral award. The arbitral award shall be final and binding, except for our right of appeal under the applicable law.</p>
    <p>Notwithstanding the foregoing, we shall both have the right to apply to Court for urgent injunctive remedies where necessary.</p>
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