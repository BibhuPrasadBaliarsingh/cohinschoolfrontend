import React from 'react';
import PageWrapper from '../components/PageWrapper';
import HeaderBanner from '../components/HeaderBanner';
import {
  FileText,
  ShieldAlert,
  AlertCircle,
  Copyright,
  Award,
  Lock,
  ExternalLink,
  Link2,
  Scale,
  CreditCard,
  Building2,
  Mail,
  Phone,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  const termsList = [
    {
      icon: InfoIcon,
      title: 'General Information & Usage',
      content:
        'The content of the pages of this website is for your general information and use only. It is subject to change without notice.'
    },
    {
      icon: WarrantyIcon,
      title: 'Warranty & Accuracy Disclaimer',
      content:
        'Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.'
    },
    {
      icon: RiskIcon,
      title: 'User Risk & Responsibility',
      content:
        'Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.'
    },
    {
      icon: CopyrightIcon,
      title: 'Intellectual Property & Copyright Notice',
      content:
        'This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.'
    },
    {
      icon: TrademarkIcon,
      title: 'Trademarks Acknowledgment',
      content:
        'All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.'
    },
    {
      icon: SecurityIcon,
      title: 'Unauthorized Usage',
      content:
        'Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.'
    },
    {
      icon: LinkIcon,
      title: 'External Third-Party Links',
      content:
        'From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).'
    },
    {
      icon: HyperlinkIcon,
      title: 'Linking to Our Website',
      content:
        'You may not create a link to this website from another website or document without Cohen International School’s prior written consent.'
    },
    {
      icon: LawIcon,
      title: 'Governing Law & Jurisdiction',
      content:
        'Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.'
    },
    {
      icon: PaymentIcon,
      title: 'Merchant Liability & Payment Authorization',
      content:
        'We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.'
    }
  ];

  return (
    <PageWrapper>
      <HeaderBanner
        title="Terms & Conditions"
        subtitle="Please review the rules, guidelines, and merchant policies that govern your use of the Cohen International School website."
        badge="Legal Agreement"
        breadcrumb="Terms & Conditions"
        bgImage="/bg.png"
      />

      <section className="py-16 bg-gradient-to-b from-slate-50 via-cream-50/50 to-slate-100 text-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Welcome & Overview Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gold-500/20 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/10 rounded-full blur-3xl -z-0"></div>
            
            <div className="relative z-10 flex items-start gap-4 mb-6">
              <div className="p-3 bg-navy-950 text-gold-400 rounded-xl shadow-md">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">Official Agreement</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy-950 mt-0.5">
                  Welcome to Cohen International School
                </h2>
              </div>
            </div>

            <p className="text-navy-700/90 text-base sm:text-lg leading-relaxed mb-4">
              Welcome to our Cohen International School. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Cohen International School’s relationship with you in relation to this website.
            </p>
            <p className="text-navy-700/80 text-sm sm:text-base leading-relaxed bg-navy-50/80 p-4 rounded-xl border border-navy-100">
              <span className="font-semibold text-navy-900">Definitions:</span> The term <span className="font-semibold text-navy-900">'Cohen International School'</span> or <span className="font-semibold text-navy-900">'us'</span> or <span className="font-semibold text-navy-900">'we'</span> refers to the owner of the website whose registered office is <span className="text-navy-900 font-medium">Haridamada, Adjacent to IIT Bbsr, Jatani, Odisha</span>. The term <span className="font-semibold text-navy-900">'you'</span> refers to the user or viewer of our website.
            </p>
          </div>

          {/* Detailed Terms List */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-1.5 bg-gold-500 rounded-full"></div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-navy-950">
                Terms of Website Use
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {termsList.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 sm:p-7 shadow-md hover:shadow-lg border border-slate-200/80 hover:border-gold-400/40 transition-all duration-300 flex flex-col sm:flex-row items-start gap-5 group"
                  >
                    <div className="flex-shrink-0 p-3.5 rounded-xl bg-navy-50 text-navy-900 group-hover:bg-navy-950 group-hover:text-gold-400 transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-bold text-gold-600 bg-gold-50 px-2.5 py-0.5 rounded-full border border-gold-200">
                          Clause {index + 1}
                        </span>
                        <h4 className="text-lg font-semibold text-navy-950 group-hover:text-gold-600 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-navy-700/85 text-sm sm:text-base leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Need Help / Contact Card */}
          <div className="bg-navy-950 text-white rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-gold-500/30">
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gold-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
                  <HelpCircle className="w-4 h-4" /> Questions regarding our terms?
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
                  Have Any Questions or Need Clarification?
                </h4>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Our admissions office and administration team are ready to assist you with any legal, fee, or policy inquiries.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-sm transition-all duration-200 text-center shadow-lg hover:shadow-gold-500/25"
                >
                  Contact Administration
                </Link>
                <Link
                  to="/"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm transition-all duration-200 text-center"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
}

// Icon Helper Components for clarity and design
function InfoIcon(props) {
  return <FileText {...props} />;
}
function WarrantyIcon(props) {
  return <AlertCircle {...props} />;
}
function RiskIcon(props) {
  return <ShieldAlert {...props} />;
}
function CopyrightIcon(props) {
  return <Copyright {...props} />;
}
function TrademarkIcon(props) {
  return <Award {...props} />;
}
function SecurityIcon(props) {
  return <Lock {...props} />;
}
function LinkIcon(props) {
  return <ExternalLink {...props} />;
}
function HyperlinkIcon(props) {
  return <Link2 {...props} />;
}
function LawIcon(props) {
  return <Scale {...props} />;
}
function PaymentIcon(props) {
  return <CreditCard {...props} />;
}
