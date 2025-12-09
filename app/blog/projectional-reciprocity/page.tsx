export default function Page() {
  return (
    <>
      {/* --- HEADER --- */}
      <header className="mb-12 md:mb-16">
        <div className="mb-6 flex items-center gap-4">
          <span className="inline-block bg-[#2e3f90] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Theoretical Note
          </span>
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            9 Dec. 2025
          </span>
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#0b0f2b] dark:text-white md:text-5xl lg:text-6xl">
          Projectional Reciprocity: A Relational Theory of Development
        </h1>
      </header>

      {/* --- CONTENT --- */}
      <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none
                      prose-headings:font-bold prose-headings:tracking-tight
                      prose-a:text-[#2e3f90] dark:prose-a:text-[#5c7cfa]
                      prose-blockquote:border-l-[#2e3f90] prose-blockquote:text-xl prose-blockquote:italic">

        <p className="lead">
          I propose <strong>projectional reciprocity</strong>: the idea that we do not grow in isolation,
          but through specific, reciprocal encounters that project us into new stages of being.
        </p>

        <h3> Relational Selfhood and the Transformative Encounter </h3>
        <p>
          I believe that every human life unfolds within a variety of intricate relations. More than an isolated entity, what we call the self is a living process that takes form through interaction. Thus, each meeting between two or more individuals contains the potential for transformation, and it is through these encounters that the individual becomes conscious of what has not yet been integrated. Projectional reciprocity springs precisely from this premise—that personal and spiritual development occur, not in solitary introspection, but through a univocal principle of reciprocal exchange.
        </p>

        <h3>From Jungian Projection to Bidirectional Exchange</h3>
        <p>
          Psychology has long recognised projection as a mechanism by which the mind externalises what it cannot yet accept as a characteristic of itself. Jung saw this as the psyche’s way of revealing itself through others, that is, in actuating itself in the world. His framework, however, treated projection as a one-way transaction in which the other served as a reflective surface rather than an agent. Projectional reciprocity reframes this assumption and proposes that projection is inherently bidirectional; that every encounter represents a mutual exchange of psychic and cognitive material at the subconscious level, where each participant simultaneously receives and provides the conditions necessary for the other’s growth and self-realization.
        </p>

        <h3>Cognitive Coupling and Predictive Minds in Interaction</h3>
        <p>
          This reciprocity can also be understood within the framework of contemporary cognitive science. For example, research in enactive and predictive-processing models suggests that perception is an active, embodied negotiation with the world, with each brain generating predictions about its environment and adjusting them in response to feedback from actions and perceptions, some of which occur directly or indirectly. When two predictive agents interact, their models become coupled, with meaning arising between them and not inside either alone, as classic models have suggested. Communication, empathy, and understanding depend precisely on this coupling. The same logic applies to emotional and spiritual evolution. Individuals adapt to one another through recursive prediction and correction, and these adjustments gradually reshape both minds.
        </p>

        <blockquote>
          "When two predictive agents interact, their models become coupled, with meaning arising between them and not inside either alone."
        </blockquote>

        <h3> Feedback Loops, Integration, and a Non-Deterministic Pedagogy of Existence</h3>
        <p>
          It is because of this naturalised perspective that projectional reciprocity views interpersonal experiences as a system of feedback loops that refine internal models of self and world, or, put differently, inner and outer. From a metaphysical perspective, it may be read as a pedagogy of existence, in which reality itself becomes the field through which consciousness learns and becomes itself. Events and relationships, more than arbitrary sequences, appear as structured opportunities for integration and self-realisation. Another crucial point: this interpretation does not claim determinism; instead, it assumes that life possesses a formative intelligence that operates through encounters and relations.
        </p>

        {/* --- CONTACT CTA --- */}
        {/* Added margin-top (mt-12) and a divider for visual separation */}
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-700">
          <p className="text-base italic text-zinc-600 dark:text-zinc-400">
            This entry outlines the core concepts of ongoing research. If you are interested in reading the full working paper, please{' '}
            <a href="mailto:bladimir@riseforhope.org" className="font-semibold no-underline hover:underline">
              get in touch
            </a>.
          </p>
        </div>

      </div>
    </>
  );
}