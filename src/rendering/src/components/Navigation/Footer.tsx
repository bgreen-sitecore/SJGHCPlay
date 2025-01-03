import Link from 'next/link';
import { ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useI18n } from 'next-localization';

export type FooterProps = ComponentProps & {
  fields: {
    data: {
      item: {
        footerLogo: {
          jsonValue: ImageField;
          alt: string;
        };
      };
      links: {
        children: {
          results: [
            {
              displayName: string;
              children: {
                results: [
                  {
                    displayName: string;
                    icon: {
                      value: IconProp;
                    };
                    title: {
                      value: string;
                    };
                    field: {
                      jsonValue: {
                        value: {
                          anchor: string;
                          href: string;
                          linktype: string;
                          target: string;
                          text: string;
                          url: string;
                        };
                      };
                    };
                  }
                ];
              };
            }
          ];
        };
      };
    };
  };
};

/*
const socialIcons = {
  facebook: faFacebookF,
  youtube: faYoutube,
  twitter: faTwitter,
  instagram: faInstagram,
  linkedin: faLinkedin,
};
*/

const Footer = (props: FooterProps): JSX.Element => {
  const newDate = new Date();
  const sxaStyles = `${props.params?.styles || ''}`;
  const { t } = useI18n();

  return (
    <div className={`footer container ${sxaStyles}`}>
      <div className="footer-banner">
        <Link href="/">
          <Image
            field={props.fields?.data.item.footerLogo.jsonValue}
            alt={props.fields?.data.item.footerLogo.alt}
            loading="lazy"
          />
        </Link>
      </div>
      <footer className="footer-content">
        {props.fields?.data?.links?.children?.results?.map((item, index) => (
          <ul key={index} className="footer-content-col">
            <li>{item.displayName}</li>
            {item.children.results.map((footerLink, footerLinkIndex) => (
              <li key={footerLinkIndex}>
                {/* Commenting out cause of error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 
                {footerLink.icon.value && (
                  <FontAwesomeIcon icon={socialIcons[footerLink.displayName.toLowerCase()]} />
                )}
                */}
                <Link href={footerLink.field?.jsonValue?.value?.href ?? '#'}>
                  {footerLink.title.value ? footerLink.title.value : footerLink.displayName}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </footer>
      <div className="footer-legal">
        <div className="footer-legal-links">
          <div>
            <p>
              {t('Copyright') || 'Copyright'} © 2014-{newDate.getFullYear()}{''}
              {t('SJOG') || 'SJOG'}
            </p>
          </div>
          <div>
            <Link href="/privacy">{t('Privacy Policy') || 'Privacy Policy'}</Link>
          </div>
          <div>
            <Link href="/terms">{t('Terms of Use') || 'Terms of Use'}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default = Footer;
