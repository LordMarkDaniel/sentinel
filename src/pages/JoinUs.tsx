import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const jobRoles = [
    "Agent de Sécurité",
    "Opérateur de télésurveillance",
    "Agent de Sécurité Rondier Intervenant",
    "Agent de Surveillance Magasin",
    "Agent de Sécurité Conducteur de Chien",
    "Agent de Sécurité Incendie Degré 1",
    "Agent de Sécurité Incendie Degré 2",
    "Agent de Sécurité Chef de Poste",
    "Coordinateur Qualité / Contrôleur",
    "Assistant Administratif",
    "Responsable d'Exploitation"
];

const testimonials = [
    {
        quote: "Ici, on ne m'a pas demandé ce que je savais faire, mais ce que je voulais devenir.",
        author: "Rabah B., agent de sécurité"
    },
    {
        quote: "J'ai commencé comme agent, je suis aujourd'hui cheffe de site. SENTINEL SECURITY m'a fait confiance et m'a donné les moyens d'avancer.",
        author: "Rachel Z., cheffe de site"
    },
    {
        quote: "Ce que j'aime dans mon poste, c'est de pouvoir transmettre ce qu'on m'a transmis : la rigueur, la solidarité, la confiance.",
        author: "Mariane C., cheffe de l'unité mobile"
    },
    {
        quote: "Ce que j'aime ici, c'est la variété des sites et la confiance qu'on nous accorde. On se sent utile.",
        author: "Souleymane M., agent mobile"
    }
];

const JoinUs = () => {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const whyRef = useRef(null);
    const testimonialRef = useRef(null);
    const formRef = useRef(null);

    const { scrollYProgress: heroProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroY = useTransform(heroProgress, [0, 1], ["10%", "30%"]);

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">

            {/* 1. Hero Section */}
            <section ref={heroRef} className="relative min-h-[70vh] flex items-center pt-32 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        style={{ y: heroY, scale: 1.1 }}
                        src="/1A.png"
                        alt="Join SENTINEL Team"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="container mx-auto px-4 z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl"
                    >
                        <div className="space-y-1 mb-10">
                            <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-4 py-1 uppercase tracking-tight">
                                Rejoindre SENTINEL SECURITY, c'est exercer
                            </span><br />
                            <span className="inline-block bg-white text-black text-lg md:text-2xl lg:text-3xl font-display font-bold px-4 py-1 uppercase tracking-tight">
                                un métier qui a du sens, au sein d'une entreprise engagée
                            </span>
                        </div>

                        <Button
                            onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full px-8 py-5 text-base flex items-center gap-3 transition-all duration-300 group shadow-lg"
                        >
                            Nos offres d'emploi
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* 2. Intro Section */}
            <section className="bg-black py-20 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto"
                    >
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                            Chez <strong>SENTINEL SECURITY</strong>, nous croyons que l'engagement de nos collaborateurs fait la qualité de nos prestations.
                        </p>
                        <p className="text-white text-base md:text-lg font-bold leading-relaxed">
                            Rejoindre nos équipes, c'est intégrer une entreprise de sécurité privée à taille humaine, basée à Douala, active dans toute la région du Littoral, où le respect, la progression et la confiance sont des valeurs concrètes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. Pourquoi nous rejoindre Section */}
            <section ref={whyRef} className="flex flex-col lg:flex-row min-h-[40vh]">
                <div className="lg:w-1/2 bg-black flex items-center justify-center p-10 lg:p-16 border-y border-white/10 lg:border-y-0 lg:border-r border-white/10">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-display font-bold leading-tight uppercase"
                    >
                        Pourquoi rejoindre l'équipe de SENTINEL SECURITY à Douala ?
                    </motion.h2>
                </div>
                <div className="lg:w-1/2 bg-white text-black flex items-center p-10 lg:p-16">
                    <motion.ul
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 text-sm md:text-base"
                    >
                        <li className="flex gap-4">
                            <span className="text-primary font-bold text-xl">•</span>
                            <div><strong>CONTRATS STABLES</strong> : Nous privilégions les relations à long terme.</div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-primary font-bold text-xl">•</span>
                            <div>Des <strong>plannings stables et adaptés</strong> à la vie personnelle.</div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-primary font-bold text-xl">•</span>
                            <div>Des <strong>primes valorisantes</strong> (excellence, cooptation, disponibilité ...).</div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-primary font-bold text-xl">•</span>
                            <div>Une <strong>écoute réelle</strong> et un management de proximité.</div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-primary font-bold text-xl">•</span>
                            <div>Des <strong>opportunités d'évolution</strong> (agents promus, encadrants formés en interne).</div>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-primary font-bold text-xl">•</span>
                            <div>Des <strong>missions variées</strong> : surveillance humaine, incendie, cynophilie, événementiel, télésurveillance...</div>
                        </li>
                    </motion.ul>
                </div>
            </section>

            {/* 4. Testimonials Section */}
            <section ref={testimonialRef} className="bg-black py-32 px-4">
                <div className="container mx-auto">
                    <h2 className="text-xl md:text-2xl font-display font-bold mb-12 max-w-2xl">
                        Votre satisfaction, notre meilleure garantie
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-primary text-black p-8 flex flex-col justify-between min-h-[300px] rounded-sm shadow-xl"
                            >
                                <div>
                                    <Quote className="h-8 w-8 mb-4 opacity-80" fill="black" />
                                    <p className="text-base leading-relaxed mb-6 italic">"{t.quote}"</p>
                                </div>
                                <p className="font-bold uppercase text-[10px] tracking-wider">{t.author}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Form Section */}
            <section ref={formRef} className="bg-white text-black py-32 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-10 uppercase tracking-tight border-b-2 border-black pb-3 inline-block">
                        Déposez votre candidature
                    </h2>

                    <form className="space-y-10">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <Label htmlFor="firstname" className="text-sm font-bold uppercase tracking-wider">Prénom</Label>
                                <Input id="firstname" className="border-2 border-black rounded-sm h-12 focus-visible:ring-primary" />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="lastname" className="text-sm font-bold uppercase tracking-wider">Nom</Label>
                                <Input id="lastname" className="border-2 border-black rounded-sm h-12 focus-visible:ring-primary" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <Label className="text-sm font-bold uppercase tracking-wider">Choix unique (Poste souhaité)</Label>
                            <RadioGroup className="grid md:grid-cols-2 gap-4">
                                {jobRoles.map((role) => (
                                    <div key={role} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-sm hover:border-primary transition-colors cursor-pointer">
                                        <RadioGroupItem value={role} id={role} className="border-2 border-black text-primary ring-offset-white focus:ring-primary h-5 w-5" />
                                        <Label htmlFor={role} className="cursor-pointer font-medium text-gray-700">{role}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <Label htmlFor="email" className="text-sm font-bold uppercase tracking-wider">Email *</Label>
                                <Input id="email" type="email" required className="border-2 border-black rounded-sm h-12 focus-visible:ring-primary" />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider">Téléphone</Label>
                                <Input id="phone" type="tel" className="border-2 border-black rounded-sm h-12 focus-visible:ring-primary" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <Label className="text-sm font-bold uppercase tracking-wider block">Votre CV</Label>
                                <Button type="button" variant="outline" className="w-full h-12 border-2 border-black bg-black text-white hover:bg-gray-800 rounded-sm font-bold flex gap-2">
                                    <span className="text-lg">+</span> Choisir un fichier
                                </Button>
                            </div>
                            <div className="space-y-3">
                                <Label className="text-sm font-bold uppercase tracking-wider block">Votre Lettre de Motivation</Label>
                                <Button type="button" variant="outline" className="w-full h-12 border-2 border-black bg-black text-white hover:bg-gray-800 rounded-sm font-bold flex gap-2">
                                    <span className="text-lg">+</span> Choisir un fichier
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="message" className="text-sm font-bold uppercase tracking-wider">Votre message</Label>
                            <Textarea id="message" className="border-2 border-black rounded-sm min-h-[150px] focus-visible:ring-primary" />
                        </div>

                        <Button className="bg-primary text-black hover:bg-black hover:text-white font-bold rounded-full px-12 py-5 text-base shadow-lg w-full md:w-auto transition-all duration-300">
                            Envoyer
                        </Button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default JoinUs;
