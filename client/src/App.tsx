import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import LanguageImg from "./assets/language-game.jpg";
import BeetleImg from "./assets/beetle-in-box.jpg";
import LudwigImg from "./assets/ludwig-wittgenstein.jpg";

const modalText = {
  header: {
    title: "This is a <header>",
    desc: "The <header> element represents a container for introductory content or a set of navigational links. It typically contains one or more heading elements (<h1> - <h6>), a logo or icon, or authorship information",
  },
  nav: {
    title: "This is a <nav>",
    desc: "The <nav> tag defines a set of navigation links. Notice that NOT all links of a document should be inside a <nav> element. The <nav> element is intended only for major blocks of navigation links",
  },
  main: {
    title: "This is a <main>",
    desc: "The <main> tag specifies the main content of a document. The content inside the <main> element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms. There must not be more than one <main> element in a document. The <main> element must NOT be a descendant of an <article>, <aside>, <footer>, <header>, or <nav> element",
  },
  article: {
    title: "This is an <article>",
    desc: "The <article> tag specifies independent, self-contained content. An article should make sense on its own and it should be possible to distribute it independently from the rest of the site. Potential sources for the <article> element include forum and blog posts, and news stories",
  },
  details: {
    title: "This is <details>",
    desc: "The <details> tag specifies additional details that the user can open and close on demand. The <details> tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within. Any sort of content can be put inside the <details> tag",
  },
  summary: {
    title: "This is a <summary>",
    desc: "The <summary> tag defines a visible heading for the <details> element. The heading can be clicked to view/hide the details. The <summary> element should be the first child element of the <details> element",
  },
  mark: {
    title: "This is a <mark>",
    desc: "The <mark> tag defines text that should be marked or highlighted",
  },
  section: {
    title: "This is a <section>",
    desc: "The <section> tag defines a section in a document which doesn't have a more specific semantic element to represent it",
  },
  aside: {
    title: "This is an <aside>",
    desc: "The <aside> tag defines some content aside from the content it is placed in. The aside content should be indirectly related to the surrounding content. The <aside> content is often placed as a sidebar in a document",
  },
  figure: {
    title: "This is a <figure>",
    desc: "The <figure> tag specifies self-contained content, like illustrations, diagrams, photos, code listings, etc. You can also add the <figcaption> element is used to add a caption for the <figure> element",
  },
  figcaption: {
    title: "This is a <figcaption>",
    desc: "The <figcaption> tag defines a caption for a <figure> element. The <figcaption> element can be placed as the first or last child of the <figure> element",
  },
  footer: {
    title: "This is a <footer>",
    desc: "The <footer> tag defines a footer for a document or section, so you can have several <footer> elements in one document. A <footer> element typically contains authorship information, copyright information, contact information, a sitemap, back to top links, and related documents",
  },
  address: {
    title: "This is an <address>",
    desc: "The <address> tag defines the contact information for the author/owner of a document or an article. The contact information can be an email address, URL, physical address, phone number, social media handle, etc. The text in the <address> element usually renders in italic, and browsers will always add a line break before and after the <address> element",
  },
  time: {
    title: "This is a <time>",
    desc: "The <time> tag defines a specific time (or datetime). The datetime attribute of this element is used translate the time into a machine-readable format so that browsers can offer to add date reminders through the user's calendar, and search engines can produce smarter search results",
  },
};

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalDesc, setModalDesc] = useState<string>("");

  const setModal = (tag: string) => {
    setModalTitle(modalText[tag as keyof typeof modalText].title);
    setModalDesc(modalText[tag as keyof typeof modalText].desc);
    setOpenModal(true);
  };

  return (
    <>
      <Navbar setModal={setModal} />

      <div className="min-h-[80vh] mt-[12vh] p-2 grid grid-cols-3 gap-4">
        <main
          onClick={() => setModal("main")}
          className="col-span-2 py-2 flex flex-col items-center gap-8 rounded-sm border border-black bg-yellow-600 hover:bg-yellow-500 transition-all duration-300 ease-in-out cursor-pointer"
        >
          <h2 className="text-xl font-bold">
            Wittgenstein's Thought Experiments
          </h2>

          <article
            onClick={(e) => {
              e.stopPropagation();
              setModal("article");
            }}
            className="flex flex-col gap-2 rounded-sm border border-black bg-green-600 hover:bg-green-500 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <h2 className="p-2 text-lg font-semibold">Language Game</h2>

            <figure
              onClick={(e) => {
                e.stopPropagation();
                setModal("figure");
              }}
              className="hover:opacity-80 transition duration-300 ease-in-out"
            >
              <img src={LanguageImg} alt="Language Game" />
            </figure>

            <div className="p-2 flex flex-col gap-4">
              <p>
                A language-game (German: Sprachspiel) is a philosophical concept
                developed by Ludwig Wittgenstein, referring to simple examples
                of language use and the actions into which the language is
                woven. Wittgenstein argued that a word or even a sentence has
                meaning only as a result of the "rule" of the "game" being
                played. Depending on the context, for example, the utterance
                "Water!" could be an order, the answer to a question, or some
                other form of communication.
              </p>

              <p>In his book he discusses: </p>

              <blockquote>
                "The language is meant to serve for communication between a
                builder A and an assistant B. A is building with
                building-stones: there are blocks, pillars, slabs and beams. B
                has to pass the stones, in the order in which A needs them. For
                this purpose they use a language consisting of the words
                "block", "pillar" "slab", "beam". A calls them out; — B brings
                the stone which he has learnt to bring at such-and-such a call.
                Conceive this as a complete primitive language."
              </blockquote>

              <p>
                Later "this" and "there" are added (with functions analogous to
                the function these words have in natural language), and "a, b,
                c, d" as numerals. An example of its use: builder A says "d —
                slab — there" and points, and builder B counts four slabs, "a,
                b, c, d..." and moves them to the place pointed to by A. The
                builder's language is an activity into which is woven something
                we would recognize as language, but in a simpler form. This
                language-game resembles the simple forms of language taught to
                children, and Wittgenstein asks that we conceive of it as "a
                complete primitive language" for a tribe of builders.
              </p>

              <details
                onClick={(e) => {
                  e.stopPropagation();
                  setModal("details");
                }}
                className="px-2 py-1 space-y-2 rounded-sm border border-black bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-in-out"
              >
                <summary
                  onClick={(e) => {
                    e.stopPropagation();
                    setModal("summary");
                  }}
                  className="p-2 rounded-sm border border-black bg-purple-600 hover:bg-purple-500 transition-all duration-300 ease-in-out"
                >
                  Simplified summary
                </summary>
                <p>
                  A language game is like thinking of language as a kind of game
                  we play. Imagine that each word or sentence is a move in this
                  game. The meaning of a word or sentence isn't fixed, but it
                  depends on the rules of the game we're playing at that moment.
                </p>
                <p>
                  For example, the word "bat" can mean a flying mammal in one
                  game, but in a different game, it might mean a wooden stick
                  used in sports. So, the meaning of words is not some fixed
                  thing; it's flexible and depends on the context or the "game"
                  being played.
                </p>
              </details>
            </div>
          </article>

          <article
            onClick={(e) => {
              e.stopPropagation();
              setModal("article");
            }}
            className="flex flex-col gap-2 rounded-sm border border-black bg-green-600 hover:bg-green-500 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <h2 className="p-2 text-lg font-semibold">Beetle-in-a-Box</h2>

            <figure
              onClick={(e) => {
                e.stopPropagation();
                setModal("figure");
              }}
              className="hover:opacity-80 transition duration-300 ease-in-out"
            >
              <img
                src={BeetleImg}
                alt="Beetle-in-a-Box"
                className="w-full object-cover"
              />
            </figure>

            <div className="p-2 flex flex-col gap-4">
              <p>
                The private language argument argues that a language
                understandable by only a single individual is incoherent. The
                beetle-in-a-box is a famous thought experiment that Wittgenstein
                introduces in the context of his investigation of pains.
              </p>

              <p>
                Pains occupy a distinct and vital place in the philosophy of
                mind for several reasons. One is that pains seem to collapse the
                appearance/reality distinction. If an object appears to you to
                be red it might not be so in reality, but if you seem to
                yourself to be in pain you must be so: there can be no case here
                of seeming at all. At the same time, one cannot feel another
                person's pain, but only infer it from their behavior and their
                reports of it.
              </p>

              <p>
                If we accept pains as special qualia known absolutely but
                exclusively by the solitary minds that perceive them, this may
                be taken to ground a Cartesian view of the self and
                consciousness. Our consciousness, of pains anyway, would seem
                unassailable. Against this, one might acknowledge the absolute
                fact of one's own pain, but claim skepticism about the existence
                of anyone else's pains. Alternatively, one might take a
                behaviorist line and claim that our pains are merely
                neurological stimulations accompanied by a disposition to
                behave.
              </p>

              <p>
                Wittgenstein invites readers to imagine a community in which the
                individuals each have a box containing a "beetle".{" "}
                <q>
                  "No one can look into anyone else's box, and everyone says he
                  knows what a beetle is only by looking at his beetle."
                </q>
              </p>

              <p>
                If the "beetle" had a use in the language of these people, it
                could not be as the name of something – because it is entirely
                possible that each person had something completely different in
                their box, or even that the thing in the box constantly changed,
                or that each box was in fact empty. The content of the box is
                irrelevant to whatever language game it is used in.
              </p>

              <p>
                By analogy, it does not matter that one cannot experience
                another's subjective sensations. Unless talk of such subjective
                experience is learned through public experience the actual
                content is irrelevant; all we can discuss is what is available
                in our public language.
              </p>

              <p>
                By offering the "beetle" as an analogy to pains, Wittgenstein
                suggests that the case of pains is not really amenable to the
                uses philosophers would make of it. "That is to say: if we
                construe the grammar of the expression of sensation on the model
                of 'object and designation', the object drops out of
                consideration as irrelevant."
              </p>

              <details
                onClick={(e) => {
                  e.stopPropagation();
                  setModal("details");
                }}
                className="px-2 py-1 space-y-2 rounded-sm border border-black bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-in-out"
              >
                <summary
                  onClick={(e) => {
                    e.stopPropagation();
                    setModal("summary");
                  }}
                  className="p-2 rounded-sm border border-black bg-purple-600 hover:bg-purple-500 transition-all duration-300 ease-in-out"
                >
                  Simplified summary
                </summary>
                <p>
                  Imagine that each person has a box, and inside the box,
                  there's a beetle. But here's the catch: you can't see what's
                  inside other people's boxes, only your own.
                </p>

                <p>
                  Now, when people talk to each other about their beetles, they
                  use the word "beetle" to describe what's in their boxes. But
                  since you can't see inside anyone else's box, you don't really
                  know if their "beetle" is the same as yours. It could be
                  something completely different, but you'd never know.
                </p>

                <p>
                  This thought experiment shows that when we talk to each other,
                  we assume that our words mean the same thing to both of us,
                  even though we can't really be sure. It's like a little
                  language mystery that Wittgenstein used to make us think about
                  how we understand each other and how language can be a bit
                  tricky because we can't peek into other people's minds or
                  boxes. So, the "beetle in a box" idea helps us see that
                  language isn't always as straightforward as it seems, and it's
                  full of these hidden complexities.
                </p>
              </details>
            </div>
          </article>

          <section
            onClick={(e) => {
              e.stopPropagation();
              setModal("section");
            }}
            className="p-2 space-y-2 rounded-sm border border-black bg-red-600 hover:bg-red-500 transition-all duration-300 ease-in-out"
          >
            <h4 className="font-semibold">Sources</h4>
            <p>
              I would like to thank{" "}
              <mark
                onClick={(e) => {
                  e.stopPropagation();
                  setModal("mark");
                }}
                className="px-2 py-1"
              >
                <Link
                  to="https://www.w3schools.com/"
                  target="_blank"
                  className="underline hover:text-gray-500 transition duration-300 ease-in"
                >
                  W3 Schools
                </Link>
              </mark>{" "}
              for the information provided on semantic tags used in the modals,{" "}
              <mark
                onClick={(e) => {
                  e.stopPropagation();
                  setModal("mark");
                }}
                className="px-2 py-1"
              >
                <Link
                  to="https://en.wikipedia.org/"
                  target="_blank"
                  className="underline hover:text-gray-500 transition duration-300 ease-in"
                >
                  Wikipedia
                </Link>
              </mark>{" "}
              for the explanation on Ludwig Wittgenstein and his philosophies,
              and{" "}
              <mark
                onClick={(e) => {
                  e.stopPropagation();
                  setModal("mark");
                }}
                className="px-2 py-1"
              >
                <Link
                  to="https://chat.openai.com/"
                  target="_blank"
                  className="underline hover:text-gray-500 transition duration-300 ease-in"
                >
                  ChatGPT-3.5
                </Link>
              </mark>{" "}
              for the simplified summaries.
            </p>
          </section>
        </main>

        <aside
          onClick={() => setModal("aside")}
          className="h-max sticky top-[9vh] px-2 pb-2 flex flex-col items-center gap-4 rounded-sm border border-black bg-orange-600 hover:bg-orange-500 transition-all duration-300 ease-in-out cursor-pointer z-0"
        >
          <figure
            onClick={(e) => {
              e.stopPropagation();
              setModal("figure");
            }}
            className="p-2 space-y-2 rounded-sm border border-black bg-yellow-600 hover:bg-yellow-500 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <img
              src={LudwigImg}
              alt="Ludwig Wittgenstein"
              className="rounded-full h-40 w-40 object-cover object-top"
            />
            <figcaption
              onClick={(e) => {
                e.stopPropagation();
                setModal("figcaption");
              }}
              className="p-1 text-center font-semibold rounded-sm border border-black bg-green-600 hover:bg-green-500 transition-all duration-300 ease-in-out cursor-pointer"
            >
              Ludwig Wittgenstein
            </figcaption>
          </figure>

          <p className="text-xs">
            He was an Austrian philosopher who worked primarily in logic, the
            philosophy of mathematics, the philosophy of mind, and the
            philosophy of language.
          </p>

          <p className="text-xs">
            From 1929 to 1947, Wittgenstein taught at the University of
            Cambridge. Only one book of his philosophy was published, the
            75-page Tractatus Logico-Philosophicus. His other best-known
            posthumous work is the 1953 book Philosophical Investigations.
          </p>

          <p className="text-xs">
            A survey among American university and college teachers ranked the
            Investigations as the most important book of 20th-century
            philosophy, standing out as "the one crossover masterpiece in
            twentieth-century philosophy, appealing across diverse
            specializations and philosophical orientations".
          </p>
        </aside>
      </div>

      <Footer setModal={setModal} />

      <Modal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        title={modalTitle}
        desc={modalDesc}
      />
    </>
  );
}

export default App;

