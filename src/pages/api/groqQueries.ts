import { groq } from 'next-sanity';

export const groqQueries: Record<string, string> = {
    components: groq`*[_type == "component"] | order(page, ASC) {name, page}`,
    profile: groq`*[_type == "profile"]{firstname, lastname, email, picture->}[0]`,
    home: groq`*[_type == "home"]{component->{name, page}, introductory, picture->}[0]`,
    why: groq`*[_type == "why"]{component->{name, page}, headTitle, shockPhrase, causes[] {name, icon->}}[0]`,
    solutions: groq`*[_type == "solution"]{component->{name, page}, headTitle, picture->, solutions, iconBonus->, bonuses}[0]`,
    methodologies: groq`*[_type == "methodology"]{component->{name, page}, headTitle, methods[] {name, picture->}}[0]`,
    pricing: groq`*[_type == "pricing"]{component->{name, page}, headTitle, price, motivation, icon->, reasons}[0]`,
    expectations: groq`*[_type == "expectation"]{component->{name, page}, headTitle, expectations[] {text, icon->}}[0]`,
    contact: groq`*[_type == "contact"]{component->{name, page}, headTitle, picture->, buttonText, comments[]->{author, text, quoteIcon->}}[0]`,
    otherMedias: groq`*[_type == "otherMedia"]{component->{name, page}, headTitle, arrowIcon->,medias[] {name, mainUrl, text, image->{..., "aspect": image.asset->metadata.dimensions.aspectRatio}, useArrow, socialNetworks[] {name, icon->, url}}}[0]`,
    background: groq`*[_type == "accessibleImage" && name == "background"]{name, alt, image}[0]`
};