var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "MPS310-2",
  "level": "1",
  "url": "MPS310-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": " "
},
{
  "id": "s_intro_firstlook",
  "level": "1",
  "url": "s_intro_firstlook.html",
  "type": "Section",
  "number": "1.1",
  "title": "A first look at graphs",
  "body": " A first look at graphs   The idea of a graph  First and foremost, you should think of a graph as a certain type of picture, containing dots and lines connecting those dots, like so:   A graph    We will typically use the letters , or (capital Gamma) to denote a graph. The dots or the graph are called vertices or nodes , and the lines between the dots are called edges . Graphs occur frequently in the real world , and typically how to show how something is connected, with the vertices representing the things and the edges showing connections.  Transit networks: The London tube map is a graph, with the vertices representing the stations, and an edge between two stations if the tube goes directly between them. More generally, rail maps in general are graphs, with vertices stations and edges representing line, and road maps as well, with vertices being cities, and edges being roads.  Social networks: The typical example would be Facebook, with the vertices being people, and edge between two people if they are friends on Facebook.  Molecules in Chemistry: In organic chemistry, molecules are made up of different atoms, and are often represented as a graph, with the atoms being vertices, and edges representing covalent bonds between the vertices.   A Caffeine Molecule, courtesey Wikimedia Commons   That is all rather informal, though, and to do mathematics we need very precise, formal definitions. We now provide that.    The formal definition of a graph  The formal definition of a graph that we will use is the following:  A graph  consists of a set , called the vertices of , and a set , called the edges of , of the two element subsets of  Consider the water molecule, which consists of a single oxygen atom, connected to two hydrogen atoms. It has three vertices, and so , and two edges  This formal definition has some perhaps unintended consequences about what a graph is. Because we have identified edges with the two things they connect, and have a set of edges, we can't have more than one edge between any two vertices. In many real world examples, this is not the case: for example, on the London Tube, the Circle, District and Picadilly lines all connect Gloucester Road with South Kensington, and so there should be multiple edges between those two vertices on the graph. As another example, in organic chemistry, there are often \"double bonds\", instead of just one.  Another consequence is that we require each edge to be a two element subset of , and so we do not allow for the possibility of an edge between a vertex and itself, often called a loop .  Graphs without multiple edges or loops are sometimes called simple graphs . We will sometimes deal with graphs with multiple edges or loops, and will try to be explicit when we allow this. Our default assumption is that our graphs are simple.  Another consequence of the definition is that edges are symmetric, and work equally well in both directions. This is not always the case: in road systems, there are often one-way streets. If we were to model Twitter or Instragram as a graph, rather than the symmetric notion of friends we would have to work with following . To capture these, we have the notion of a directed graph , where rather than just lines, we think of the edges as arrows, pointing from one vertex (the source) to another vertex (the target). To model Twitter or Instagram, we would have an ege from vertex to vertex if followed .    Basic examples and concepts  Several simple graphs that are frequently referenced have specific names.  The complete graph is the graph on vertices, with an edge between any two distinct vertices.  The empty graph is the graph on vertices, with no edges.  The path graph is the graph on vertices with edges .  The cycle graph is the graph on vertices with edges .   Basic graphs    The complelement of a simple graph , which we will denote , and is sometimes written , is the graph with the same vertex set as , but if and only if ; that is, there is an edge between and in if and only if there is not an edge between and in  The empty graph and complete graph are complements of each other;  The path graph and its complement are shown below:     It commonly occurs that there are two different types of vertices, and the edges only go between vertices of the two types. For example, we may be modelling a company, and one type of vertices may represent the employees, and another type of vertices could represent the different jobs that need done, with an edge between a worker and a job if the worker is qualified to do that particular job. We call these graphs bipartite .  A graph is bipartite if its vertices can be coloured red and blue so that every edge goes between a red vertex and a blue vertex.  The graph below is bipartite.     As another example, note that the cycle graph is bipartite -- we can colour vertices 1 and 3 red, and vertices 2 and 4 blue. But the cycle graph is not bipartite: as the two colours are interchangable, we can assume we coloured vertex 1 red; then since it is adjacent to both 2 and 3, those vertices must both be blue, but they're adjacent to each other, which violates the definition of bipartite. More generally, we have:  The cycle graph is bipartite if and only if n is even.  Let's try to colour the vertices of red and blue so that adjacent vertices have different colour. Without loss of generality, we may assume that is coloured blue. Then since it is adjacent to must be coloured red. Continuing in this way, we see that is blue for odd and red for even . But is adjacent to , and so these will have different colours precisely when is even.    A graph is bipartite if and only if has no subgraphs that are isomorphic to  First, note that if is a subgraph of , and is bipartite, then so is : colouring the vertices of red and blue in particular colours the vertices of as well. Hence, we see if that has a subgraph isomorphic to , which isn't bipartite by the previous lemma, then can't be bipartite, either.  In the other direction, we assume that has no subgraphs isomorphic to ; we need to prove that is bipartite. Again, let's try to colour the vertices of red and blue so that adjancent vertices have different colours. Choose a vertex of , without loss of generality we may assume that is coloured blue; then all vertices adjacent to -- i.e., those vertices at distance 1 from -- are coloured red. The vertices adjacent to those must be blue, and the ones adjacent to those must be red, alternating out. This suggests trying to colour all vertices at odd distance from red, and those vertices at even distance from blue. We will show that if this colouring has two vertices of the same colour that are adjacent, then has an odd cycle.  Assume that and are two vertices coloured red that are adjacent. Since is red, the distance from to is odd -- there is a path . Similarly, there is an odd length path from to : . Taking the union of these two subgraphs and the edge connecting and , we get a closed walk consisting of edges, which is odd. This walk may repeat some vertices and edges, but if it does we can split it into two smaller walks, one of which must have odd length, and eventually we must get a closed walk of odd length that doesn't repeat any vertices.  The case that and are both coloured blue is completely analogous, except we will be merging two paths with an even number of edges and one extra edge to get a path with odd length.    A special type of bipartite graph is the complete bipartite graphs , which are the simple graphs that have as many edges as possible while still being bipartite.  The complete bipartite graph  is the graph with red vertices and blue vertices, and an edge between very red vertex and every blue vertex.    The complete bipartite graph is isomorphic to .  The graphs and are drawn below.      "
},
{
  "id": "fig_firstgraph",
  "level": "2",
  "url": "s_intro_firstlook.html#fig_firstgraph",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " A graph   "
},
{
  "id": "fig_caffeinegraph",
  "level": "2",
  "url": "s_intro_firstlook.html#fig_caffeinegraph",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": "A Caffeine Molecule, courtesey Wikimedia Commons  "
},
{
  "id": "s_intro_firstlook-3-3",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-3-3",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "A graph  consists of a set , called the vertices of , and a set , called the edges of , of the two element subsets of "
},
{
  "id": "s_intro_firstlook-3-4",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-3-4",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "Consider the water molecule, which consists of a single oxygen atom, connected to two hydrogen atoms. It has three vertices, and so , and two edges "
},
{
  "id": "s_intro_firstlook-4-3",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-4-3",
  "type": "Definition",
  "number": "1.1.5",
  "title": "",
  "body": "The complete graph is the graph on vertices, with an edge between any two distinct vertices. "
},
{
  "id": "s_intro_firstlook-4-4",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-4-4",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": "The empty graph is the graph on vertices, with no edges. "
},
{
  "id": "s_intro_firstlook-4-5",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-4-5",
  "type": "Definition",
  "number": "1.1.7",
  "title": "",
  "body": "The path graph is the graph on vertices with edges . "
},
{
  "id": "s_intro_firstlook-4-6",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-4-6",
  "type": "Definition",
  "number": "1.1.8",
  "title": "",
  "body": "The cycle graph is the graph on vertices with edges . "
},
{
  "id": "fig_basic_graphs",
  "level": "2",
  "url": "s_intro_firstlook.html#fig_basic_graphs",
  "type": "Figure",
  "number": "1.1.9",
  "title": "",
  "body": " Basic graphs   "
},
{
  "id": "s_intro_firstlook-4-8",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-4-8",
  "type": "Definition",
  "number": "1.1.10",
  "title": "",
  "body": "The complelement of a simple graph , which we will denote , and is sometimes written , is the graph with the same vertex set as , but if and only if ; that is, there is an edge between and in if and only if there is not an edge between and in "
},
{
  "id": "s_intro_firstlook-4-9",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-4-9",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "The empty graph and complete graph are complements of each other;  The path graph and its complement are shown below:    "
},
{
  "id": "s_intro_firstlook-4-11",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-4-11",
  "type": "Definition",
  "number": "1.1.12",
  "title": "",
  "body": "A graph is bipartite if its vertices can be coloured red and blue so that every edge goes between a red vertex and a blue vertex. "
},
{
  "id": "s_intro_firstlook-4-12",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-4-12",
  "type": "Example",
  "number": "1.1.13",
  "title": "",
  "body": "The graph below is bipartite.    "
},
{
  "id": "s_intro_firstlook-4-14",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-4-14",
  "type": "Lemma",
  "number": "1.1.14",
  "title": "",
  "body": "The cycle graph is bipartite if and only if n is even.  Let's try to colour the vertices of red and blue so that adjacent vertices have different colour. Without loss of generality, we may assume that is coloured blue. Then since it is adjacent to must be coloured red. Continuing in this way, we see that is blue for odd and red for even . But is adjacent to , and so these will have different colours precisely when is even.   "
},
{
  "id": "s_intro_firstlook-4-15",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-4-15",
  "type": "Lemma",
  "number": "1.1.15",
  "title": "",
  "body": "A graph is bipartite if and only if has no subgraphs that are isomorphic to  First, note that if is a subgraph of , and is bipartite, then so is : colouring the vertices of red and blue in particular colours the vertices of as well. Hence, we see if that has a subgraph isomorphic to , which isn't bipartite by the previous lemma, then can't be bipartite, either.  In the other direction, we assume that has no subgraphs isomorphic to ; we need to prove that is bipartite. Again, let's try to colour the vertices of red and blue so that adjancent vertices have different colours. Choose a vertex of , without loss of generality we may assume that is coloured blue; then all vertices adjacent to -- i.e., those vertices at distance 1 from -- are coloured red. The vertices adjacent to those must be blue, and the ones adjacent to those must be red, alternating out. This suggests trying to colour all vertices at odd distance from red, and those vertices at even distance from blue. We will show that if this colouring has two vertices of the same colour that are adjacent, then has an odd cycle.  Assume that and are two vertices coloured red that are adjacent. Since is red, the distance from to is odd -- there is a path . Similarly, there is an odd length path from to : . Taking the union of these two subgraphs and the edge connecting and , we get a closed walk consisting of edges, which is odd. This walk may repeat some vertices and edges, but if it does we can split it into two smaller walks, one of which must have odd length, and eventually we must get a closed walk of odd length that doesn't repeat any vertices.  The case that and are both coloured blue is completely analogous, except we will be merging two paths with an even number of edges and one extra edge to get a path with odd length.   "
},
{
  "id": "s_intro_firstlook-4-17",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-4-17",
  "type": "Definition",
  "number": "1.1.16",
  "title": "",
  "body": "The complete bipartite graph  is the graph with red vertices and blue vertices, and an edge between very red vertex and every blue vertex.  "
},
{
  "id": "s_intro_firstlook-4-18",
  "level": "2",
  "url": "s_intro_firstlook.html#s_intro_firstlook-4-18",
  "type": "Example",
  "number": "1.1.17",
  "title": "",
  "body": " The complete bipartite graph is isomorphic to .  The graphs and are drawn below.    "
},
{
  "id": "s_intro_degrees",
  "level": "1",
  "url": "s_intro_degrees.html",
  "type": "Section",
  "number": "1.2",
  "title": "Degree and handshaking",
  "body": " Degree and handshaking   Definition of degree  Intuitively, the degree of a vertex is the number of edges coming out of it . If we think of a graph as a picture, then to find the degree of a vertex we draw a very small circle around , the number of times the intersects that circle is the degree of . Formally, we have:  Let be a simple graph, and let be a vertex of . Then the degree of , written , is the number of edges with . Alternatively, is the number of vertices is adjacent to.  The graph   In the graph shown in , vertices and have degree 2, vertex has degree 3, and vertex has degree 1.   Note that in the definition we require to be a simple graph. The notion of degree has a few pitfalls to be careful of has loops or multiple edges. We still want to the degree to match the intuitive notion of the number of edges coming out of captured in the drawing with a small circle. The trap to beware is that this notion no longer agrees with the number of vertices adjacent to or the the number of edges incident to    The graph to the right has two vertices, and , and three edges, two between and , and a loop at . Vertex has degree 4, and vertex has degree 2.     Extended example: Chemistry  In organic chemistry, molecules are frequently drawn as graphs, with the vertices being atoms, and an edge betwen two vertices if and only if the corresponding atoms have a covalent bond between them (that is, they share a vertex).  Alkanes   The location of an element on the periodic table determines the valency of the element -- hence the degree that vertex has in any molecule containing that graph:  Hydrogen (H) and Fluorine (F) have degree 1  Oxygen (O) and Sulfur (S) have degree 2  Nitrogen (N) and Phosphorous (P) have degree 3  Carbon (C) has degree 4   Usually, most of the atoms involved are carbon and hydrogen. Carbon atoms are not labelled with a C, but just left blank, while hydrogen atoms are left off completely. One can then complete the full structure of the molecule using the valency of each vertex. On the exam, you may have to know that Carbon has degree 4 and Hydrogen has degree 1; the valency of any other atom would be provided to you  Graphs coming from organic chemistry do not have to be simple – sometimes there are double bonds, where a pair of carbon atoms have two edges between them.  Saturated vs. unsaturated  If we know the chemical formula of a molecule, then we know how many vertices of each degree it has. For a general graph, this information is known as the degree sequence  Degree sequence The degree sequence of a graph is just the list (with multiplicity) of the degrees of all the vertices.  The following sage code draws a random graph with 7 vertices and 10 edges, and then gives its degree sequence. You can tweak the code to generate graphs with different number of vertices and edges, and run the code multiple times, and the degree sequence should become clear.   Knowing the chemical composition of a molecule determines the degree sequence of its corresponding graph. However, it is possible that the same set of atoms may be put together into a molecule in more than one different ways. In chemistry, these are called isomers . In terms of graphs, this corresponds to different graphs that have the same degree sequence.  An important special case is the constant degree sequence.  Regular graphs A graph is - regular , or regular of degree  if every vertex has the same degree , i.e. .  As a common special case, a regular graph where every vertex has degree three is called trivalent , or cubic .  Some quick examples: The cycle graph is two-regular  The complete graph is -regular  The Petersen graph is trivalent    Handshaking lemma and first applications  To motivative the Handshaking Lemma, we consider the following question. Suppose there seven people at a party. Is it possible that everyone at the party knows exactly three other people?  We can model the situation a graph, with vertices being people at the party, and an edge between two vertices if the corresponding people know each other. The question is then asking for the existence of a graph with seven vertices so that every vertex has degree three. It is then natural to attempt to solve the problem by trying to draw such a graph. After a few foiled attempts, we begin to suspect that it's not possible, but doing a case-by-case elimination of all the possibilities is daunting. It's easier to find a reason why we can't draw such a graph.  We will do this as follows: suppose that everyone at the party who knows each other shakes hands. How many handshakes will occur? On the one hand, from the definitions this would just be the number of edges in the graph. On the other hand, we can count the number of handshakes working person-by-person: each person knows three other people, and so is involved in three handshakes. But each handshake involves two people, and so if we count we've counted each handhsake twice, and so there should be handshakes happening, which makes no sense, as we can't have half a handshake. Thus, we have a contradiction, and we conclude such a party isn't possible.  Euler's handshaking Lemma is a generalization of the argument we just made to an arbitrary graph.  (Euler's handshaking Lemma)   We count the ends of edges two different ways. On the one hand, every end occurs at a vertex, and at vertex there are ends, and so the total number of ends is the sum on the left hand side. On the other hand, every edge has exactly two ends, and so the number of ends is twice the number of edges, giving the right hand side.  We have seen already seen one use of Euler's handshaking Lemma, but it will be particularly useful in Chapter 3, when we study graphs on surfaces.   "
},
{
  "id": "s_intro_degrees-2-3",
  "level": "2",
  "url": "s_intro_degrees.html#s_intro_degrees-2-3",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "Let be a simple graph, and let be a vertex of . Then the degree of , written , is the number of edges with . Alternatively, is the number of vertices is adjacent to. "
},
{
  "id": "s_intro_degrees-2-4",
  "level": "2",
  "url": "s_intro_degrees.html#s_intro_degrees-2-4",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "The graph   In the graph shown in , vertices and have degree 2, vertex has degree 3, and vertex has degree 1.  "
},
{
  "id": "s_intro_degrees-2-6",
  "level": "2",
  "url": "s_intro_degrees.html#s_intro_degrees-2-6",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  The graph to the right has two vertices, and , and three edges, two between and , and a loop at . Vertex has degree 4, and vertex has degree 2.   "
},
{
  "id": "s_intro_degrees-3-3",
  "level": "2",
  "url": "s_intro_degrees.html#s_intro_degrees-3-3",
  "type": "Example",
  "number": "1.2.5",
  "title": "Alkanes.",
  "body": "Alkanes  "
},
{
  "id": "s_intro_degrees-3-8",
  "level": "2",
  "url": "s_intro_degrees.html#s_intro_degrees-3-8",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "Saturated vs. unsaturated "
},
{
  "id": "s_intro_degrees-3-10",
  "level": "2",
  "url": "s_intro_degrees.html#s_intro_degrees-3-10",
  "type": "Definition",
  "number": "1.2.7",
  "title": "Degree sequence.",
  "body": "Degree sequence The degree sequence of a graph is just the list (with multiplicity) of the degrees of all the vertices. "
},
{
  "id": "s_intro_degrees-3-15",
  "level": "2",
  "url": "s_intro_degrees.html#s_intro_degrees-3-15",
  "type": "Definition",
  "number": "1.2.8",
  "title": "Regular graphs.",
  "body": "Regular graphs A graph is - regular , or regular of degree  if every vertex has the same degree , i.e. . "
},
{
  "id": "s_intro_degrees-4-6",
  "level": "2",
  "url": "s_intro_degrees.html#s_intro_degrees-4-6",
  "type": "Theorem",
  "number": "1.2.9",
  "title": "",
  "body": "(Euler's handshaking Lemma)  "
},
{
  "id": "s_intro_degrees-4-7",
  "level": "2",
  "url": "s_intro_degrees.html#s_intro_degrees-4-7",
  "type": "Proof",
  "number": "1.2.3.1",
  "title": "",
  "body": "We count the ends of edges two different ways. On the one hand, every end occurs at a vertex, and at vertex there are ends, and so the total number of ends is the sum on the left hand side. On the other hand, every edge has exactly two ends, and so the number of ends is twice the number of edges, giving the right hand side. "
},
{
  "id": "s_intro_isomorphisms",
  "level": "1",
  "url": "s_intro_isomorphisms.html",
  "type": "Section",
  "number": "1.3",
  "title": "Graph Isomorphisms",
  "body": " Graph Isomorphisms  Generally speaking in mathematics, we say that two objects are \"isomorphic\" if they are \"the same\" in terms of whatever structure we happen to be studying. The symmetric group and the symmetry group of an equilateral triangle are isomorphic. In this section we briefly briefly discuss isomorphisms of graphs.  Isomorphic graphs  The \"same\" graph can be drawn in the plane in multiple different ways. For instance, the two graphs below are each the \"cube graph\", with vertices the 8 corners of a cube, and an edge between two vertices if they're connected by an edge of the cube:  Two drawings of the cube graph  It is not hard to see that the two graphs above are both drawings of the cube, but for more complicated graphs it can be quite difficult at first glance to tell whether or not two graphs are the same. For instance, there are many ways to draw the Petersen graph that aren't immediately obvious to be the same.  This animated gif created by Michael Sollami for this Quanta Magazine article on the Graph Isomorphism problem illustrates many different such drawings in a way that makes the isomorphisms apparent.   An isomorphism of simple graphs is a biject between their vertex sets that preserves the number of edges between vertices. In other words, and are adjacent in if and only if and are adjancent in .   is isomorphic to its complement  The cycle graph on 5 vertices, is isomorphic to its complement, . The cycle is usually drawn as a pentagon, and if we were then going to naively draw we would draw a 5-sided star. However, we could draw differently as shown, making it clear that it is isomorphic to , with isomorphism defined by .  Although solving the graph isomorphism problem for general graphs is quite difficult, doing it for small graphs by hand is not too bad and is something you must be able to do for the exam. If the two graphs are actually isomorphic, then you should show this by exhibiting an isomrophism; that is, writing down an explicit bijection between their vertex sets with the desired properties. The most attractive way of doing this, for humans, is to label the vertices of both copies with the same letter set.  If two graphs are not isomorphic, then you have to be able to prove that they aren't. Of course, one can do this by exhaustively describing the possibilities, but usually it's easier to do this by giving an obstruction – something that is different between the two graphs. One easy example is that isomorphic graphs have to have the same number of edges and vertices. We'll discuss some others in the next section   Heuristics for showing graphs are or aren't isomorphic  Another, only slightly more advanced invariant is the degree sequence of a graph that we saw last lecture in our discussion of chemistry.  If is an isomorphism of graphs, than we must have for all vertices , and since isomorphisms are bijections on the vertex set, we see the degree sequence must be preserved. However, just because two graphs have the same degree sequences does not mean they are isomorphic.  Slightly subtler invariants are number and length of cycles and paths.   Cultural Literacy: The Graph Isomorphism Problem  This section, as all \"Cultural Literacy\" sections, is information that you may find interesting, but won't be examined.  The graph isomorphism problem is the following: given two graphs and , determine whether or not and are isomorphic. Clearly, for any two graphs and , the problem is solvable: if and both of vertices, then there are different bijections between their vertex sets. One could simply examine each vertex bijection in turn, checking whether or not it maps edges to edges.  The problem is interesting because the naive algorithm discussed above is not very efficient: for large , is absolutely huge, and so in general this algorithm will take a long time. The question is, is there are a faster way to do check? How fast can we get?  The isomorphism problem is of fundamental importance to theoretical computer science. Apart from its practical applications, the exact difficulty of the problem is unknown. Clearly, if the graphs are isomorphic, this fact can be easily demonstrated and checked, which means the Graph Isomorphism is in NP.  Most problems in NP are known either to be easy (solvable in polynomial time, P), or at least as difficult as any other problem in NP (NP complete). This is not true of the Graph Isomorphism problem. In November of last year, Laszlo Babai announced a quasipolynomial-time algorithm for the graph isomorphism problem – you can read about this work in this great popular science article.   "
},
{
  "id": "s_intro_isomorphisms-3-3",
  "level": "2",
  "url": "s_intro_isomorphisms.html#s_intro_isomorphisms-3-3",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": "Two drawings of the cube graph "
},
{
  "id": "s_intro_isomorphisms-3-4",
  "level": "2",
  "url": "s_intro_isomorphisms.html#s_intro_isomorphisms-3-4",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "It is not hard to see that the two graphs above are both drawings of the cube, but for more complicated graphs it can be quite difficult at first glance to tell whether or not two graphs are the same. For instance, there are many ways to draw the Petersen graph that aren't immediately obvious to be the same.  This animated gif created by Michael Sollami for this Quanta Magazine article on the Graph Isomorphism problem illustrates many different such drawings in a way that makes the isomorphisms apparent.  "
},
{
  "id": "s_intro_isomorphisms-3-5",
  "level": "2",
  "url": "s_intro_isomorphisms.html#s_intro_isomorphisms-3-5",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "An isomorphism of simple graphs is a biject between their vertex sets that preserves the number of edges between vertices. In other words, and are adjacent in if and only if and are adjancent in . "
},
{
  "id": "s_intro_isomorphisms-3-6",
  "level": "2",
  "url": "s_intro_isomorphisms.html#s_intro_isomorphisms-3-6",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": " is isomorphic to its complement  The cycle graph on 5 vertices, is isomorphic to its complement, . The cycle is usually drawn as a pentagon, and if we were then going to naively draw we would draw a 5-sided star. However, we could draw differently as shown, making it clear that it is isomorphic to , with isomorphism defined by . "
},
{
  "id": "s_intro_instantinsanity",
  "level": "1",
  "url": "s_intro_instantinsanity.html",
  "type": "Section",
  "number": "1.4",
  "title": "Instant Insanity",
  "body": " Instant Insanity  So far, our motivation for studying graph theory has largely been one of philosophy and language. Before we get too much deeper, however, it may be useful to present a nontrivial and perhaps unexpected application of graph theory; an example where graph theory helps us to do something that would be difficult or impossible to do without it.  A puzzle   Instant Insanity Package    There is a puazzle marketed under the name \"Instant Insanity\", one version of which is shown above. The puzzle is sometimes called \"the four cubes problem\", as it consists of four different cubes. Each face of each cube is painted one of four different colours: blue, green, red or yellow. The goal of the puzzle is to line the four cubes up in a row, so that along the four long edges (front, top, back, bottom) each of the four colours appears eactly once.  Depending on how the cubes are coloured, this may be not be possible, or there may be many such possibilities. In the original instant insanity, there is exactly one solution (up to certain equivalences of cube positions). The point of the cubes is that there are a large number of possible cube configurations, and so if you just look for a solution without being extremely systematic, it is highly unlikely you will find it.  But trying to be systematic and logical about the search directly is quite difficult, perhaps because we have problems holding the picture of the cube in our mind. In what follows, we will introduce a way to translate the instant insanity puzzle into a question in graph theory. This is obviously in no way necessary to solve the puzzle, but does make it much easier. It also demonstrates the real power of graph theory as a visualization and thought aid.  There are many variations on Instant Insanity, discussions of which can be found here and here . There’s also a commercial for the game.   Enter graph theory  It turns out that the important factor of the cubes is what color is on the opposite side of each face. Suppose we want face one facing forward. Then we have four different ways to rotate the cube to keep this the same. The same face will always appear on the opposite side, but we can get any of the remaining four faces to be on top, say.  An impossible set of cubes    Let us encode this information in a graph. The vertices of the graph will be the four colors, B, G, R and Y. We will put an edge between two colors each time they appear as opposite faces on a cube, and we will label that edge with a number 1-4 denoting which cube the two opposite faces appear. Thus, in the end the graph will have twelve edges, three with each label 1-4. For from the first cube, there will be a loop at B, and edge between G and R, and an edge between Y and R. The graph corresponding to the four cubes above is the following:  The graph constructed from the cubes in      Proving that our cubes were impossible We now analyze the graph to prove that this set of cubes is not possible.  Suppose we had an arrangement of the cubes that was a solution. Then, from each cube, pick the edge representing the colors facing front and back on that cube. These four edges are a subgraph of our original graph, with one edge of each label, since we picked one edge from each cube. Furthermore, since we assumed the arrangement of cubes was a solution of instant insanity, each color appears once on the front face and once on the back. In terms of our subgraph, this translates into asking that each vertex has degree two.  We can get another subgraph satisfying these two properties by looking at the faces on the top and bottom for each cube and taking the corresponding edges. Furthermore, these two subgraphs do not have any edges in common.  Thus, given a solution to the instant insanity problem, we found a pair of subgraphs satisfying:  Each subgraph has one edge with each label 1,2,3,4  Every vertex of has degree 2  No edge of the original graph is used in both and  As an exercise, one can check that given a pair of subgraphs satisfying 1-3, one can produce a solution to the instant insanity puzzle.  Thus, to show the set of cubes we are currently examining does not have a solution, we need to show that the graph does not have two subgraphs satisfying properties 1-3.  To do, this, we catalog all graphs satisfying properties 1-2. If every vertex has degree 2, either:  Every vertex has a loop  There is one vertex with a loop, and the rest are in a triangle  There are two vertices with loops and a double edge between the other two vertices  There are two pairs of double edges  All the vertices live in one four cycle  A subgraphs of type 1 is not possible, because G and R do not have loops.  For subgraphs of type 2, the only triangle is G-R-Y, and B does have loops. The edge between Y-G must be labeled 3, which means the loop at B must be labeled 1. This means the edge between G and R must be labeled 4 and the edge between Y and R must be 2, giving the following subgraph:  A subgraph for a solution for one pair of faces    For type 3, the only option is to have loops at B and Y and a double edge between G and R. We see the loop at Y must be labeled 2, one of the edges between G and R must be 4, and the loop at B and the other edge between G and R can switch between 1 and 3, giving two possibilities:  Two more subgraphs for a partial solutions       For subgraphs of type 4, the only option would be to have a double edge between B and G and another between Y and R; however, none of these edges are labeled 3 and this option is not possible.  Finally, subgraphs of type 5 cannot happen because B is only adjacent to G and to itself; to be in a four cycle it would have two be adjacent to two vertices that aren’t itself.  This gives three different possibilities for the subgraphs SiSi that satisfy properties 1 and 2. However, all three possibilities contain the the edge labeled 4 between G and R; hence we cannot choice two of them with disjoint edges, and the instant insanity puzzle with these cubes does not have a solution.   Other cube sets  The methods above also give a way to find the solution to a set of instant insanity cubes should one exist. I illustrate this in the following Youtube video:    "
},
{
  "id": "s_intro_instantinsanity-3-2",
  "level": "2",
  "url": "s_intro_instantinsanity.html#s_intro_instantinsanity-3-2",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " Instant Insanity Package   "
},
{
  "id": "fig_impossible_cubes",
  "level": "2",
  "url": "s_intro_instantinsanity.html#fig_impossible_cubes",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": "An impossible set of cubes   "
},
{
  "id": "fig_graph_from_cubes",
  "level": "2",
  "url": "s_intro_instantinsanity.html#fig_graph_from_cubes",
  "type": "Figure",
  "number": "1.4.3",
  "title": "",
  "body": "The graph constructed from the cubes in    "
},
{
  "id": "fig_impossible_first",
  "level": "2",
  "url": "s_intro_instantinsanity.html#fig_impossible_first",
  "type": "Figure",
  "number": "1.4.4",
  "title": "",
  "body": "A subgraph for a solution for one pair of faces   "
},
{
  "id": "fig_impossible_twoandthree",
  "level": "2",
  "url": "s_intro_instantinsanity.html#fig_impossible_twoandthree",
  "type": "Figure",
  "number": "1.4.5",
  "title": "",
  "body": "Two more subgraphs for a partial solutions      "
},
{
  "id": "s_intro_trees",
  "level": "1",
  "url": "s_intro_trees.html",
  "type": "Section",
  "number": "1.5",
  "title": "Trees",
  "body": " Trees  A very important class of graphs are trees -- they are connected, but just barely: removing any edge causes them not to be connected.  Basics on trees   A forest consisting of three trees    The figure above shows some examples of the trees. Meanwhile, the cycle graph or the complete graph with are not trees: we can remove an edge from these graphs and they'd still be connected. The formal definition of a tree is as follows:  Trees and Forests  A graph is a tree if:    is connected   has no cycles   A not necessarily connected graph with no cycles is called a forest , so that a forest is a union of trees.   Informally, the condition that is connected is asking that have enough edges, while the condition that has no cycles is asking for not to have too many edges. Thus, trees are sort of \"goldilocks\" graphs -- they have enough edges, but not too many -- they're connected, but just barely.  The following Theorem gives many alternate characterisations of trees, and makes more precise the intuition of trees as \"goldilocks graphs\" . Let be a graph with vertices. The following are equivalent:    is a tree.  Between any two vertices , there is a unique path.   is connected, but removing any edge makes disconnected.   has no cycles, but adding any edges to creates a cycle.   is connected and has edges   has no cycles and has edges    We will not use most of , and will not prove that all options are equivalence. We briefly proof that 1 is equivalent to 2 now, and in the next section we will carefully prove that 1 is equivalent to 5, as we will use this fact a few times. The rest make a good exercise to check your basic understanding.  To see that 1 and 2 are equivalent, note that being connected by definition means there is a path between every two vertices. As a tree is a connected graph without any cycles, to finish seeing 1 and 2 are equivalent is exactly , whose main idea is contained in    Two different paths create a cycle    A graph has no cycles if and only if there is at most one path between any two vertices of .  If has a cycle, the there are at least two paths between any vertex on that cycle -- the paths going each way around the cycle. Thus, we just have to show that if there there are two paths between between and , then has a cycle.  In the easy case, the two paths will contain no vertices in common except for and , and so the union of the two paths will be a cycle. In general, the paths will share other vertices and edges -- they may well repeat vertices and edges themselves. But in any case, by considering some subset of these two paths will be a cycle.     Leaves  To prove Theorem , we first need to introduce the concept of leaves.  Leaf  A vertex is called a leaf if it has degree one, i.e. if   When looked at a drawn graph, this definition is fairly intuitive: real life trees branch out and split in leaves, just like mathematical trees.  Trees have leaves  Let be a finite tree with at least two vertices. Then has at least two leaves.  By assumption, has at least two vertices, say and . Since is a tree it is connected, and so in particular there must be a path between and ; let be the vertices in this path, and let be the edge in the path joining to .  Since is adjacent to it has degree at least one; if it has degree 1 it is a leaf, and we've found a leaf. If is not a leaf, then there must be another edge coming out of it, say going to . Note that cannot be any of the vertices we've already found, as then we'd have more than one path between two vertices and hence a loop, but was a tree. Thus we can make the path a bit longer.  We can now continue this argument inductively as long as the vertex at the of the path has degree higher than 1. But since is finite, and we never return to a vertex we've already visited, we this process must eventually terminate, but the only way this can happen is if the end vertex of the path has degree 1, that is, if it's a leaf.  A similar argument extending from , the other end of the path, shows that we must eventually reach a different leaf from that end, and so must have at least two leaves, as desired.   Now that we have a basic understanding of leaves, we are ready to prove the following: A simple graph with vertices is a tree if and only if is connected and has edges.  Since being connected is half of the requirement of being a tree, we need to show that a connected graph on vertices is a tree if and only if it has edges.  Let us first prove that a tree on vertices has edges. We will use induction on . As bases, there is only one tree with 1 vertex, and it does in fact have 0 edges, and there is only one tree with two vertices, and it does in fact have 1 edge. So for the inductive step, let us suppose that we know that all trees with vertices have edges, and let be a tree with vertices. By Lemma, we know that has a leaf , which by the definition of leaves is connected to the rest of by a single edge . If we delete and from , we get a smaller graph ince which has one less vertex and one less edge than did.  Since was a tree, it follows that is a tree, too -- check this yourself, using the definition of a tree! Then, since is a tree with vertices, byt the inductive hypothesis it follows that it has one less edge edges, and so must have edges, which is what we were trying to show.  Now we show the other direction: that if is a simple connected graph with vertices and edges, then is a tree. The basic structure of the proof is the same as the other direction: find a vertex adjacent to a single edge , and delete and to get a smaller tree, where we can assume the proposition holds, and then use induction.  To play the role of the lemma that every tree has a leaf, we will establish the following statement: if is a connected graph with vertices and edges, then \/p> has a vertex of degree 1. Note that since is connected, it can't have any vertices of degree 0, and so to prove it has a vertex of degree 1 it is enough to show that it has a vertex of degree strictly less than 2. Thus, for contradiction assume that every vertex of has degree . But then the handshaking lemma would say: a contradiction, and hence must have a vertex of degree 1, as desired.     Trees in Chemistry  Our brief study of trees has the following consequence for chemistry: whether or not a molecule is a tree is determined just by its chemical formula, and not how it's put together. Equivalently, if one isomer of a molecule is a tree, then all isomers of the molecule are.  The argument runs as follows. Knowing the chemical formula of a molecule means we know the degree sequence of the corresonding graphs. Molecules are by definition connected graphs, so to be a tree it is enough to show that the graph has one less edge than the number of vertices. But we can compute the number of edges from the degree sequence by using the Handshaking Lemma.  Alkanes are trees Any molecule with formula is an alkane . Although in general alkanes can have multiple isomers, every isomer of an Alkane will always be a tree, as we now show.  To show a graph is a tree, it suffices to show that it is connected and that the number of edges is one less than the number of vertices. Since Alkanes are molecules, we know that the graph is connected. Furthermore, has carbons adn hydrogens, and hence has vertices. Thus, it is enough to show that any molecule with formula has edges.  To do this, we use the handshaking lemma: . Each of the carbons has degree 4, so the carbons contribute to the total degree, and each hydrogen of the has degree 1 and so only contributes 1 to the sum of degrees. Hence, twice the number of edges is equal to , and so there are edges, as desired.   As an early application of graph theory, Cayley used these ideas to count the number of isomers of Alkanes (with some mistakes). In general, you can count isomers of any molecule by counting isomorphism classes of graphs with given degree sequences, but it can help organize the search to know, e.g., that they're all trees. To make sure we don't miss or double count any, it's useful to organize the enumeration according to some principle; for Alkanes one way is to organize according to the longest path of carbons, another is to restrict degree sequences to just how the carbons have connected to other carbons.  Counting isomers of  We illustrate these both of these methods. We first illustrate by length of the longest path of carbons.  Chain length six: Since we've used all carbons then there are no more choices, and there is only one such isomer.  Chain length five: We need to add one more carbon. We can't add it to either of the end carbons, because then we'd have a path of length 6. We can add it to the central of the two chains, or alternatively to one either side of central -- the last two trees are isomorphic, giving us two possibilities  Chain length four: We need to add two more carbons. Again, they can't be added to either of the end carbons, or we'd have a longer chain length. Therefore, they most be added to the two central carbons. One case is that we add one carbon to each of the two central carbons. Alternatively, we could add both the carbons to the same \"central\" carbon reversing the order of the chain is a symmetry that interchanges the two central atoms. We could add each carbon directly to the existing carbon in the chain, or we could add them one after the other making a chain of length two. However, the resulting graph would have a chain of length 5 and already be counted. Thus, there are two possibilities here.  Chain length three: We need at add three more carbons, and there's only one central carbon to attach them to. We can't add them all directly to this central carbon, as that would create a carbon of degree 5. On the other hand, once we add a chain of length longer than one to this central carbon we'd have a path of length 4 or greater.  Thus, we see there are five isomers of . Alternatively, we could organize our search by deleting the hydrogens, and then considering the degrees of the resulting carbon-carbon graph.   Degree at most two: If the resulting tree only had carbons of degree at most two, then it would have to be the path graph , and so we only have one possibility here.  One vertex of degree three: If the resulting graph had exactly one carbon of degree three, that vertex and its three neighbours would account for 4 of our 6 carbons, and so we'd have to add two more. We couldn't add them directly to the same vertex, as that would create a second vertex of degree three. So, they could either be added as a chain of length two to one of the leaves of the existing graph, or they could be added to two separate leaves. Drawing these graphs we see they're not isomorphic, and so we have two possibilities here.  Two vertices of degree three: If we have two vertices of degree three, one sees they'd have to be adjacent to each other, resulting in one possibity.  Vertex of degree four: A vertex of degree 4 and its four neighbours would account for all but one of the carbons. We could add that carbon to any of the leaves, and get one more possiblity.    Isomers of    Since carbons only have degree 4, the tree with six vertices where all are connected to a central vertex isn't allowed, and we have found all the isomers.    "
},
{
  "id": "s_intro_trees-3-2",
  "level": "2",
  "url": "s_intro_trees.html#s_intro_trees-3-2",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": " A forest consisting of three trees   "
},
{
  "id": "s_intro_trees-3-4",
  "level": "2",
  "url": "s_intro_trees.html#s_intro_trees-3-4",
  "type": "Definition",
  "number": "1.5.2",
  "title": "Trees and Forests.",
  "body": "Trees and Forests  A graph is a tree if:    is connected   has no cycles   A not necessarily connected graph with no cycles is called a forest , so that a forest is a union of trees.  "
},
{
  "id": "s_intro_trees-3-7",
  "level": "2",
  "url": "s_intro_trees.html#s_intro_trees-3-7",
  "type": "Theorem",
  "number": "1.5.3",
  "title": "",
  "body": "Let be a graph with vertices. The following are equivalent:    is a tree.  Between any two vertices , there is a unique path.   is connected, but removing any edge makes disconnected.   has no cycles, but adding any edges to creates a cycle.   is connected and has edges   has no cycles and has edges   "
},
{
  "id": "fig-unique-cycle",
  "level": "2",
  "url": "s_intro_trees.html#fig-unique-cycle",
  "type": "Figure",
  "number": "1.5.4",
  "title": "",
  "body": " Two different paths create a cycle   "
},
{
  "id": "lemma-unique-cycle",
  "level": "2",
  "url": "s_intro_trees.html#lemma-unique-cycle",
  "type": "Lemma",
  "number": "1.5.5",
  "title": "",
  "body": "A graph has no cycles if and only if there is at most one path between any two vertices of .  If has a cycle, the there are at least two paths between any vertex on that cycle -- the paths going each way around the cycle. Thus, we just have to show that if there there are two paths between between and , then has a cycle.  In the easy case, the two paths will contain no vertices in common except for and , and so the union of the two paths will be a cycle. In general, the paths will share other vertices and edges -- they may well repeat vertices and edges themselves. But in any case, by considering some subset of these two paths will be a cycle.   "
},
{
  "id": "s_intro_trees-4-3",
  "level": "2",
  "url": "s_intro_trees.html#s_intro_trees-4-3",
  "type": "Definition",
  "number": "1.5.6",
  "title": "Leaf.",
  "body": "Leaf  A vertex is called a leaf if it has degree one, i.e. if  "
},
{
  "id": "s_intro_trees-4-5",
  "level": "2",
  "url": "s_intro_trees.html#s_intro_trees-4-5",
  "type": "Lemma",
  "number": "1.5.7",
  "title": "Trees have leaves.",
  "body": "Trees have leaves  Let be a finite tree with at least two vertices. Then has at least two leaves.  By assumption, has at least two vertices, say and . Since is a tree it is connected, and so in particular there must be a path between and ; let be the vertices in this path, and let be the edge in the path joining to .  Since is adjacent to it has degree at least one; if it has degree 1 it is a leaf, and we've found a leaf. If is not a leaf, then there must be another edge coming out of it, say going to . Note that cannot be any of the vertices we've already found, as then we'd have more than one path between two vertices and hence a loop, but was a tree. Thus we can make the path a bit longer.  We can now continue this argument inductively as long as the vertex at the of the path has degree higher than 1. But since is finite, and we never return to a vertex we've already visited, we this process must eventually terminate, but the only way this can happen is if the end vertex of the path has degree 1, that is, if it's a leaf.  A similar argument extending from , the other end of the path, shows that we must eventually reach a different leaf from that end, and so must have at least two leaves, as desired.   "
},
{
  "id": "s_intro_trees-4-6",
  "level": "2",
  "url": "s_intro_trees.html#s_intro_trees-4-6",
  "type": "Lemma",
  "number": "1.5.8",
  "title": "",
  "body": "A simple graph with vertices is a tree if and only if is connected and has edges.  Since being connected is half of the requirement of being a tree, we need to show that a connected graph on vertices is a tree if and only if it has edges.  Let us first prove that a tree on vertices has edges. We will use induction on . As bases, there is only one tree with 1 vertex, and it does in fact have 0 edges, and there is only one tree with two vertices, and it does in fact have 1 edge. So for the inductive step, let us suppose that we know that all trees with vertices have edges, and let be a tree with vertices. By Lemma, we know that has a leaf , which by the definition of leaves is connected to the rest of by a single edge . If we delete and from , we get a smaller graph ince which has one less vertex and one less edge than did.  Since was a tree, it follows that is a tree, too -- check this yourself, using the definition of a tree! Then, since is a tree with vertices, byt the inductive hypothesis it follows that it has one less edge edges, and so must have edges, which is what we were trying to show.  Now we show the other direction: that if is a simple connected graph with vertices and edges, then is a tree. The basic structure of the proof is the same as the other direction: find a vertex adjacent to a single edge , and delete and to get a smaller tree, where we can assume the proposition holds, and then use induction.  To play the role of the lemma that every tree has a leaf, we will establish the following statement: if is a connected graph with vertices and edges, then \/p> has a vertex of degree 1. Note that since is connected, it can't have any vertices of degree 0, and so to prove it has a vertex of degree 1 it is enough to show that it has a vertex of degree strictly less than 2. Thus, for contradiction assume that every vertex of has degree . But then the handshaking lemma would say: a contradiction, and hence must have a vertex of degree 1, as desired.   "
},
{
  "id": "s_intro_trees-5-4",
  "level": "2",
  "url": "s_intro_trees.html#s_intro_trees-5-4",
  "type": "Example",
  "number": "1.5.9",
  "title": "Alkanes are trees.",
  "body": "Alkanes are trees Any molecule with formula is an alkane . Although in general alkanes can have multiple isomers, every isomer of an Alkane will always be a tree, as we now show.  To show a graph is a tree, it suffices to show that it is connected and that the number of edges is one less than the number of vertices. Since Alkanes are molecules, we know that the graph is connected. Furthermore, has carbons adn hydrogens, and hence has vertices. Thus, it is enough to show that any molecule with formula has edges.  To do this, we use the handshaking lemma: . Each of the carbons has degree 4, so the carbons contribute to the total degree, and each hydrogen of the has degree 1 and so only contributes 1 to the sum of degrees. Hence, twice the number of edges is equal to , and so there are edges, as desired.  "
},
{
  "id": "s_intro_trees-5-6",
  "level": "2",
  "url": "s_intro_trees.html#s_intro_trees-5-6",
  "type": "Example",
  "number": "1.5.10",
  "title": "Counting isomers of <span class=\"process-math\">\\(C_6H_{14}\\)<\/span>.",
  "body": "Counting isomers of  We illustrate these both of these methods. We first illustrate by length of the longest path of carbons.  Chain length six: Since we've used all carbons then there are no more choices, and there is only one such isomer.  Chain length five: We need to add one more carbon. We can't add it to either of the end carbons, because then we'd have a path of length 6. We can add it to the central of the two chains, or alternatively to one either side of central -- the last two trees are isomorphic, giving us two possibilities  Chain length four: We need to add two more carbons. Again, they can't be added to either of the end carbons, or we'd have a longer chain length. Therefore, they most be added to the two central carbons. One case is that we add one carbon to each of the two central carbons. Alternatively, we could add both the carbons to the same \"central\" carbon reversing the order of the chain is a symmetry that interchanges the two central atoms. We could add each carbon directly to the existing carbon in the chain, or we could add them one after the other making a chain of length two. However, the resulting graph would have a chain of length 5 and already be counted. Thus, there are two possibilities here.  Chain length three: We need at add three more carbons, and there's only one central carbon to attach them to. We can't add them all directly to this central carbon, as that would create a carbon of degree 5. On the other hand, once we add a chain of length longer than one to this central carbon we'd have a path of length 4 or greater.  Thus, we see there are five isomers of . Alternatively, we could organize our search by deleting the hydrogens, and then considering the degrees of the resulting carbon-carbon graph.   Degree at most two: If the resulting tree only had carbons of degree at most two, then it would have to be the path graph , and so we only have one possibility here.  One vertex of degree three: If the resulting graph had exactly one carbon of degree three, that vertex and its three neighbours would account for 4 of our 6 carbons, and so we'd have to add two more. We couldn't add them directly to the same vertex, as that would create a second vertex of degree three. So, they could either be added as a chain of length two to one of the leaves of the existing graph, or they could be added to two separate leaves. Drawing these graphs we see they're not isomorphic, and so we have two possibilities here.  Two vertices of degree three: If we have two vertices of degree three, one sees they'd have to be adjacent to each other, resulting in one possibity.  Vertex of degree four: A vertex of degree 4 and its four neighbours would account for all but one of the carbons. We could add that carbon to any of the leaves, and get one more possiblity.    Isomers of    Since carbons only have degree 4, the tree with six vertices where all are connected to a central vertex isn't allowed, and we have found all the isomers.  "
},
{
  "id": "s_intro_exercises",
  "level": "1",
  "url": "s_intro_exercises.html",
  "type": "Exercises",
  "number": "1.6",
  "title": "Exercises",
  "body": " For each of the following sequences, either give an example of such a graph, or explain why one does not exist.   A graph with six vertices whose degree sequence is  A graph with six vertices whose degree sequence is  A graph with six vertices whose degree sequence is  A simple graph with six vertices whose degree sequence is    For the next Olympic Winter Games, the organizers wish to expand the number of teams competing in curling. They wish to have teams enter, divided into two pools of seven teams each. Right now, they're thinking of requiring that in preliminary play each team will play seven games against distinct opponents. Five of the opponents will come from their own pool and two of the opponents will come from the other pool. They're having trouble setting up such a schedule, so they've come to you. By using an appropriate graph-theoretic model, either argue that they cannot use their current plan or devise a way for them to do so.      contains four graphs on six vertices. Determine which (if any) pairs of graphs are isomorphic. For pairs that are isomorphic, give an isomorphism between the two graphs. For pairs that are not isomorphic, explain why.   Are these graphs isomorphic?      Let be a simple graph with vertices and degree sequence . What's the degree sequence of its complement ?  Let be the graph with graph with vertices consisting of the 10 three element subsets of , and two vertices adjacent if they share exactly one element. So, for example, the two vertices and are adjacent, but neither or is adjacent to .  Draw in a way that shows it is isomorphic to the Petersen graph.  Now let be the graph with vertices consisting of the 10 two element subsets of , and two vertices adjacent if they share no elements. Without drawing , write down an isomorphism between and . Hint: There's a \"natural\" bijection between the two and three element subsets of   Recall that denotes the complement of a graph . Prove that is an isomorphism of graphs if and only if is an isomorphism.  Determine the number of non-isomorphic simple graphs with seven vertices such that each vertex has degree at least five. Consider the previous exercise   Consider the standard Instant Insanity puzzle, with four cubes and four colours. Explain why one would expect there to be 331,776 different cube configurations. Further explain why there would be fewer configurations if any cubes are coloured with symmetries.  In the text, we solve the puzzle by finding certain pairs of subgraphs. Assuming that none of the cubes are coloured symmetrically, explain why each pair of subgraphs corresponds to at least 8 different cube configurations that are actually solutions, and why, depending on the isomorphism type of the subgraphs found, there may be more solutions.  Variations of the Insant Insanity puzzle increase the number of cubes and the number of colours. Explain how to modify our graph theoretic solution to solve the puzzle when we have cubes, each face of which is coloured one of colours, and we want to line up the cubes so that each of the top, bottom, front and rear strings of cubes displays each of the colours exactly once.  Use the method from the previous question to solve the following set of six cubes, marketed under the name \"Drive ya crazy\", where each face is coloured either blue, cyan, green, orange, red, or yellow.   The six cubes from \"Drive Ya crazy\"    "
},
{
  "id": "s_intro_exercises-1",
  "level": "2",
  "url": "s_intro_exercises.html#s_intro_exercises-1",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "",
  "body": "For each of the following sequences, either give an example of such a graph, or explain why one does not exist.   A graph with six vertices whose degree sequence is  A graph with six vertices whose degree sequence is  A graph with six vertices whose degree sequence is  A simple graph with six vertices whose degree sequence is "
},
{
  "id": "s_intro_exercises-2",
  "level": "2",
  "url": "s_intro_exercises.html#s_intro_exercises-2",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "",
  "body": "  For the next Olympic Winter Games, the organizers wish to expand the number of teams competing in curling. They wish to have teams enter, divided into two pools of seven teams each. Right now, they're thinking of requiring that in preliminary play each team will play seven games against distinct opponents. Five of the opponents will come from their own pool and two of the opponents will come from the other pool. They're having trouble setting up such a schedule, so they've come to you. By using an appropriate graph-theoretic model, either argue that they cannot use their current plan or devise a way for them to do so.   "
},
{
  "id": "s_intro_exercises-3",
  "level": "2",
  "url": "s_intro_exercises.html#s_intro_exercises-3",
  "type": "Exercise",
  "number": "1.6.3",
  "title": "",
  "body": "  contains four graphs on six vertices. Determine which (if any) pairs of graphs are isomorphic. For pairs that are isomorphic, give an isomorphism between the two graphs. For pairs that are not isomorphic, explain why.   Are these graphs isomorphic?     "
},
{
  "id": "s_intro_exercises-4",
  "level": "2",
  "url": "s_intro_exercises.html#s_intro_exercises-4",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "",
  "body": "Let be a simple graph with vertices and degree sequence . What's the degree sequence of its complement ? "
},
{
  "id": "s_intro_exercises-5",
  "level": "2",
  "url": "s_intro_exercises.html#s_intro_exercises-5",
  "type": "Exercise",
  "number": "1.6.5",
  "title": "",
  "body": "Let be the graph with graph with vertices consisting of the 10 three element subsets of , and two vertices adjacent if they share exactly one element. So, for example, the two vertices and are adjacent, but neither or is adjacent to .  Draw in a way that shows it is isomorphic to the Petersen graph.  Now let be the graph with vertices consisting of the 10 two element subsets of , and two vertices adjacent if they share no elements. Without drawing , write down an isomorphism between and . Hint: There's a \"natural\" bijection between the two and three element subsets of  "
},
{
  "id": "s_intro_exercises-6",
  "level": "2",
  "url": "s_intro_exercises.html#s_intro_exercises-6",
  "type": "Exercise",
  "number": "1.6.6",
  "title": "",
  "body": "Recall that denotes the complement of a graph . Prove that is an isomorphism of graphs if and only if is an isomorphism. "
},
{
  "id": "s_intro_exercises-7",
  "level": "2",
  "url": "s_intro_exercises.html#s_intro_exercises-7",
  "type": "Exercise",
  "number": "1.6.7",
  "title": "",
  "body": "Determine the number of non-isomorphic simple graphs with seven vertices such that each vertex has degree at least five. Consider the previous exercise  "
},
{
  "id": "s_intro_exercises-8",
  "level": "2",
  "url": "s_intro_exercises.html#s_intro_exercises-8",
  "type": "Exercise",
  "number": "1.6.8",
  "title": "",
  "body": "Consider the standard Instant Insanity puzzle, with four cubes and four colours. Explain why one would expect there to be 331,776 different cube configurations. Further explain why there would be fewer configurations if any cubes are coloured with symmetries.  In the text, we solve the puzzle by finding certain pairs of subgraphs. Assuming that none of the cubes are coloured symmetrically, explain why each pair of subgraphs corresponds to at least 8 different cube configurations that are actually solutions, and why, depending on the isomorphism type of the subgraphs found, there may be more solutions. "
},
{
  "id": "s_intro_exercises-9",
  "level": "2",
  "url": "s_intro_exercises.html#s_intro_exercises-9",
  "type": "Exercise",
  "number": "1.6.9",
  "title": "",
  "body": "Variations of the Insant Insanity puzzle increase the number of cubes and the number of colours. Explain how to modify our graph theoretic solution to solve the puzzle when we have cubes, each face of which is coloured one of colours, and we want to line up the cubes so that each of the top, bottom, front and rear strings of cubes displays each of the colours exactly once. "
},
{
  "id": "s_intro_exercises-10",
  "level": "2",
  "url": "s_intro_exercises.html#s_intro_exercises-10",
  "type": "Exercise",
  "number": "1.6.10",
  "title": "",
  "body": "Use the method from the previous question to solve the following set of six cubes, marketed under the name \"Drive ya crazy\", where each face is coloured either blue, cyan, green, orange, red, or yellow.   The six cubes from \"Drive Ya crazy\"   "
},
{
  "id": "s_walks_basics",
  "level": "1",
  "url": "s_walks_basics.html",
  "type": "Section",
  "number": "2.1",
  "title": "Walks: the basics",
  "body": " Walks: the basics   If the edges in a graph represent connections between different cities, it is obvious to strart planning longer trips that compose several of these connections. The notion of a walk formally captures this definition; the formal notions of path and trail further ask that we not double back on ourselves or repeat ourselves in certain formally defined ways.  Once we've done that, we investigate what it means for a graph to be connected or disconnected.   Walks and connectedness  Before we see the formal definition of a walk, it will be useful to see an example:   Example of a walk     In the graph shown, the vertices are labelled with letters, and the edges are labelled with numbers, and we have a walk highlighted in red, and with arrowtips drawn on the edges. Starting from vertex , we can take edge 6 to vertex , and then edge 5 to vertex , edge 5 to vertext , edge 3 back to vertex , and finally edge 8 to vertex . Intuitively,then, a walk strings together several edges that share vertices in between. Makign that formal, we have the following.  Walk in a graph is a sequence   where the are vertices, the are edges, and the edge goes between vertices and .  We say that the walk is between vertices and   With this notation for a walk, Example , the walk shown would be written . The visual representation of the walk on the graph is vastly more intuitive, the written one feeling cumbersome in comparison.  The definition of walk above contains some extra information. If we just know the sequence of edges we can reconstruct what the vertices have to be (assuming we have at least two edges in the walk). Alternatively, if the graph does not have multiple edges, it is enough to just know the vertices , but if has multiple edges that just knowing the vertices does not determine the walk.  Connected  We say a graph is connected if for any two vertices , there is a walk from to in .  Disjoint union  Given two graphs and , the disjoint union  is obtained by taking the disjoint union of both the vertices and edges of and . So consists of a copy of and a copy of , with no edges in between the two graphs.  Disconnected  A graph is disconnected if we can write for two proper (i.e., not all of ) subgraphs and .  We now have a definition for what it means for a graph to be connected, and another for what it means for a graph to be disconnected. From everday usage of this words, we would certainly hope that a graph is disconnected if and only if it is not connected. However, it is not immediately clear from the definitions as written that this is the case.   The following are equivalent:  . is connected   is not disconnected     1 implies 2: Supppose that is connected, and let ; we want to show that there is a walk from to .  Define to be the set of all vertices so that there is a walk from to ; we want to show that .  First, observe that there are no edges from to . Suppose that was an edge between and . Since , by the definition of there is a walk from to . We can add the edge to the end of the walk, to get a walk from to , and hence by definition .  Now suppose that . Then and are both nonempty, and by the above there are no edges between them, and so is not connected, a contradiction.  To prove 2 implies 1, we prove the contrapositive. If is not connected, then there are two vertices so that there is no walk from to .  Suppose that , and pick . Any walk from to starts in and ends in , and so at some point there must be an edge from a vertex in to a vertex in , but there are no such edges    Types of Walks  Many questions in graph theory ask whether or not a walk of a certain type exists on a graph: we introduce some notation that will be needed for these questions.  We say a walk is closed if it starts and ends on the same vertex; i.e., . The length of a walk is , the number of edges in it. The distance between two vertices and is the length of the shortest walk from to , if one exists, and if one does not exist.  It is sometimes convenient to have terminology for walks that don't backtrack on themselves:   If the edges of the walk are all distinct, we call it a trail  If the vertices of the walk are all distinct (except possibly ), we call the walk a path . The exception is to allow for the possibility of closed paths.  Let . The following are equivalent:   There is a walk from to   There is a trail from to  There is a path from to .   As is often the case, the formal write-up of the proof makes something that can seem very easy intuitively look laborious, so it's worth anlysing it briefly for our example walk from . This walk is not a path as it repeats the vertex ; however, we may simply remove the triangle from the walk to get the trail . this idea is what works in general.  It is immediate from the definitions that 3 implies 2 which implies 1, as any path is a trail, and any trail is a walk.  That 1 implies 3 is intuitively obvious: if you repeat a vertex, then you've visited someplace twice, and weren't taking the shortest route. Let's make this argument mathematically precise.  Suppose we have a walk that is not a path. Then, we must repeat some vertex, say , with . Then we can cut out all the vertices and edges between and to obtain a new walk   Since , the new walk is strictly shorter than our original walk. Since the length of a walk is finite, if we iterate this process the result must eventually terminate. That means all our vertices are distinct, and hence is a path.   "
},
{
  "id": "fig_walkdrawing",
  "level": "2",
  "url": "s_walks_basics.html#fig_walkdrawing",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " Example of a walk    "
},
{
  "id": "s_walks_basics-3-5",
  "level": "2",
  "url": "s_walks_basics.html#s_walks_basics-3-5",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Walk.",
  "body": "Walk in a graph is a sequence   where the are vertices, the are edges, and the edge goes between vertices and .  We say that the walk is between vertices and  "
},
{
  "id": "s_walks_basics-3-8",
  "level": "2",
  "url": "s_walks_basics.html#s_walks_basics-3-8",
  "type": "Definition",
  "number": "2.1.3",
  "title": "Connected.",
  "body": "Connected  We say a graph is connected if for any two vertices , there is a walk from to in . "
},
{
  "id": "s_walks_basics-3-9",
  "level": "2",
  "url": "s_walks_basics.html#s_walks_basics-3-9",
  "type": "Definition",
  "number": "2.1.4",
  "title": "Disjoint union.",
  "body": "Disjoint union  Given two graphs and , the disjoint union  is obtained by taking the disjoint union of both the vertices and edges of and . So consists of a copy of and a copy of , with no edges in between the two graphs. "
},
{
  "id": "s_walks_basics-3-10",
  "level": "2",
  "url": "s_walks_basics.html#s_walks_basics-3-10",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Disconnected.",
  "body": "Disconnected  A graph is disconnected if we can write for two proper (i.e., not all of ) subgraphs and . "
},
{
  "id": "s_walks_basics-3-12",
  "level": "2",
  "url": "s_walks_basics.html#s_walks_basics-3-12",
  "type": "Lemma",
  "number": "2.1.6",
  "title": "",
  "body": " The following are equivalent:  . is connected   is not disconnected   "
},
{
  "id": "s_walks_basics-3-13",
  "level": "2",
  "url": "s_walks_basics.html#s_walks_basics-3-13",
  "type": "Proof",
  "number": "2.1.1.1",
  "title": "",
  "body": " 1 implies 2: Supppose that is connected, and let ; we want to show that there is a walk from to .  Define to be the set of all vertices so that there is a walk from to ; we want to show that .  First, observe that there are no edges from to . Suppose that was an edge between and . Since , by the definition of there is a walk from to . We can add the edge to the end of the walk, to get a walk from to , and hence by definition .  Now suppose that . Then and are both nonempty, and by the above there are no edges between them, and so is not connected, a contradiction.  To prove 2 implies 1, we prove the contrapositive. If is not connected, then there are two vertices so that there is no walk from to .  Suppose that , and pick . Any walk from to starts in and ends in , and so at some point there must be an edge from a vertex in to a vertex in , but there are no such edges  "
},
{
  "id": "s_walks_basics-4-3",
  "level": "2",
  "url": "s_walks_basics.html#s_walks_basics-4-3",
  "type": "Definition",
  "number": "2.1.7",
  "title": "",
  "body": "We say a walk is closed if it starts and ends on the same vertex; i.e., . The length of a walk is , the number of edges in it. The distance between two vertices and is the length of the shortest walk from to , if one exists, and if one does not exist. "
},
{
  "id": "s_walks_basics-4-5",
  "level": "2",
  "url": "s_walks_basics.html#s_walks_basics-4-5",
  "type": "Definition",
  "number": "2.1.8",
  "title": "",
  "body": " If the edges of the walk are all distinct, we call it a trail  If the vertices of the walk are all distinct (except possibly ), we call the walk a path . The exception is to allow for the possibility of closed paths. "
},
{
  "id": "s_walks_basics-4-6",
  "level": "2",
  "url": "s_walks_basics.html#s_walks_basics-4-6",
  "type": "Lemma",
  "number": "2.1.9",
  "title": "",
  "body": "Let . The following are equivalent:   There is a walk from to   There is a trail from to  There is a path from to .  "
},
{
  "id": "s_walks_basics-4-8",
  "level": "2",
  "url": "s_walks_basics.html#s_walks_basics-4-8",
  "type": "Proof",
  "number": "2.1.2.1",
  "title": "",
  "body": "It is immediate from the definitions that 3 implies 2 which implies 1, as any path is a trail, and any trail is a walk.  That 1 implies 3 is intuitively obvious: if you repeat a vertex, then you've visited someplace twice, and weren't taking the shortest route. Let's make this argument mathematically precise.  Suppose we have a walk that is not a path. Then, we must repeat some vertex, say , with . Then we can cut out all the vertices and edges between and to obtain a new walk   Since , the new walk is strictly shorter than our original walk. Since the length of a walk is finite, if we iterate this process the result must eventually terminate. That means all our vertices are distinct, and hence is a path. "
},
{
  "id": "s_walks_eulerian",
  "level": "1",
  "url": "s_walks_eulerian.html",
  "type": "Section",
  "number": "2.2",
  "title": "Eulerian Walks",
  "body": " Eulerian Walks  In this section we introduce the problem of Eulerian walks, often hailed as the origins of graph theroy. We will see that determining whether or not a walk has an Eulerian circuit will turn out to be easy; in contrast, the problem of determining whether or not one has a Hamiltonian walk, which seems very similar, will turn out to be very difficult.   The bridges of Konigsburg  The city of Konigsberg (now Kaliningrad) was built on two sides of a river, near the site of two large islands. The four sectors of the city were connected by seven bridges, as follows (picture from Wikipedia):   The city of Konigsburg in Euler's time    A group of friends enjoyed strolling through the city, and created a game: could they take a walk in the city, crossing every bridge exactly once, and return to where they started from? They couldn't find such a walk, but they couldn't prove such a walk wasn't possible, and so they wrote to the mathematician Euler, who proved that such a walk is not possible.   Eulerian Walks: definitions  We will formalize the problem presented by the citizens of Konigsburg in graph theory, which will immediately present an obvious generalization.  We may represent the city of Konigsburg as a graph ; the four sectors of town will be the vertices of , and edges between vertices will represent the bridges (hence, this will not be a simple graph).  Then, the question reduces to finding a closed walk in the graph that will uses every edge exactly once. In particular, this walk will not use any edge more than once and hence will be a trail.  Which graphs have walks that use every vertex and edge exactly once?  Let be a graph. An Eulerian cycle is a closed walk that uses every edge of exactly once.  If has an Eulerian cycle, we say that is Eulerian .  If we weaken the requirement, and do not require the walk to be closed, we call it an Euler path, and if a graph has an Eulerian path but not an Eulerian cycle, we say is semi-Eulerian  The question of the walkers of Konigsburg is then equivalent to asking if the graph is Eulerian. The birth of graph theory is usually marked to the following theorem, proven by Euler:  A connected graph is Eulerian if and only if every vertex of has even degree   A digression on proofs, formality, and intuition  Before discussing the proof of , it's worth a little meta-discussion about proofs, intuition vs. rigor, and mathematics as a whole. The proofing is a common exam question, and you may not be used to studying for reproducing proofs on exams. Certainly one way to prepare for such a question is to memorize the proof word for word. There doesn't seem to be a lot of obvious value in this approach, however. So why ask these questions on the exam? And this opens the door to more philosophical questions as well: how should we think\/interact with proofs anyway? What's the point of it all?  Usually in books or in lectures, proofs are only given in slick, elegant, polished formal versions. There are many reasons for this: there's a certain beauty to it; it's important to write it out formally to make sure it's all correct; there's only so much time in lectures, and brevity is a virtue anyway. People turn away from long works, and the main point of a proof, after all, is to prove something, and it's easier to check that it's all correct if it's shorter.  But there's a very real downside to this presentation of proofs as the finished, elegant thing. Most important to me is that the way mathematics is written formally on the page is very different from how it lives actively in our brains (or my brain, at least). Nobody (or certainly very few people) comes up with proofs in the elegant short start to finish way that they're written. Typically, there's a mess of chaotic half ideas that slowly get refined down to the written proof that you see. But often the mess is the exciting part,  We sketch a few of the main ideas of the proof in an informal setting now, before giving a complete formal proof. To learn this proof for the exam, you should have this informal picture in your head, and perhaps a skeleton outline of the main formal points that need to be shown. You shouldn't try to memorize the formal proof word for word like a poem; instead, practice expanding out from the informal ideas\/skeleton proof to the full formal proof on your own a few times.  It is much easier to see that if a graph  is Eulerian, then every vertex has even degree. Suppose we wanted to show that a given vertex was Eulerian; let us stand at the vertex and have a friend trace out the Eulerian cycle. We'll wait for a while, and then the friend will appear at along some edge , and then live along some different edge . We'll wait some more, and they'll reappear coming from new edge , and then leave again along some edge .  This will continue until they have arrived or left by every edge that hits . But every time they visit , they must arrive by one edge, and leave by another one, and hence every visit uses up an even number of edges, and so the degree of must be even. But there was nothing special about the vertex , and hence the degree of every vertex must be even.  To argue the other way is more difficult; before trying to show there's a closed path that uses all the edges, let's just construct any closed path. We pick some vertex to start at, and just randomly choose an edge out of , to some other vertex , and from there randomly choosing any edge we haven't used yet to another vertex , and so on.  To construct a closed walk, we'd like to show we eventually have to return to . We're only working with finite graphs, so our walk can't continue forever; the only possibility we have to rule out is that we reach some vertex and find that we have already used every vertex incident to . But as we saw before, the path will pair up the edges incident to each vertex as an arriving edge and a departing edge, and we know the degree of is even. If the path has already visited times, then we'll have used of the edges incident to it; when we arrive for the st time we'll use one edge, and in all we'll have used edges, an odd number; since the degree of is even there must be at least one edge we haven't used to exit by.  You might worry that the argument above suggests we can carry on the walk forever, which we obviously can't do since the graph is finite, but the argument above doesn't work for : when we start the path out at , we haven't had to arrive there, and so the edge we initially leave by is not paired with anything. Therefore, if has all vertices with even degree, and we walk randomly for as long as we can, we'll always get stuck at our starting vertex.  Hence, we have shown that if is a graph with all vertices having even degree, there will exist some closed walk in , but the walk we created was chosen randomly, and there's no guarantee it will include all the edge of -- in all likelihood, it won't.  But if we look at the edges we haven't used, they will form a simpler graph. . There's no reason for to be connected, but it's not too hard to see that every vertex of will still have even degree: in every vertex had even degree, and we saw in our first proof that a closed walk that doesn't repeat edges uses up an even number of edges at each vertex, and so we'll have an even number of edges left at each point. Thus, each connected piece of satisfies the hypothesis of the problem, and is simpler, so we can try to find a closed walk on each of connected piece of , and then \"stitch\" the results together to get a walk that uses all the pieces. In the formal proof, this process is best captured using induction, and we'll save the complete description until then, but for now we illustrate the process in an example   Example of a walk      Let's see an example of how the process of finding an Eulerian path works for the graph in Figure below.   A graph   It probably isn't hard to immediately find an Eulerian cycle for just by examination, but to illustrate the algorithm to begin with, we are going to deliberately choose a cycle that doesn't use every edge, the cycle aeijgba show in the next figure:   Initializing with a closed walk in    To extend our cycle to an Eulerian cycle, we delete all the edges used in the graph, and study the remaining graph. In our case, this graph has two connected components, a four cycle and a three cycle. Both of these are cycles themselves, they're trivially Eulerian, -- in general, it might take some work to find an Eulerian cycle for the components, but won't be too hard as the graph will be smaller.   Parts of missed by our walk    Finally, we stitch our Eulerian paths together. We follow our initial cycle that wasn't an Eulerian cycle, and the first time we hit a vertex that's in one of the other cycles, we insert that cycle in before we continue along our original path. In our example, our original cycle was aeijgba. a is not eitehr of the other components, but e is in the four cycle, so before we continue on our original cycle to i, we insert the four cycle ehije, giving aehije. We now continue along our original cycle, adding ei, ij, jg, until we reach a vertex g that's in one of the added cycles, which we then insert, giving aehijeijgcdg as our cycle so far.  Continuing this process, we find aehijeijgcdgba as an Eulerian cycle.   The Eulerian cycle stitched together      We first show that if is Eulerian, then every vertex has even degree. For suppose the Eulerian cycle visits the vertex times. Each time it visits it must arrive by one edge, and leave by a different edge. Since the walk is Eulerian, every edge adjacent to will be used exactly once by the walk, and so we see that as desired.  Now we suppose that is connected and that every vertex has even degree. We will induct on the number of edges of . If it has no edges, then the theorem is vacuously true -- we can just take the empty walk.  For the inductive step, suppose that is connected with edges, and that every vertex of has even degree. Further assume, for the inductive hypothesis, that every graph with these properties and less than edges is Eulerian.  Suppose for now that we can find a closed walk in that doesn't repeat any edges -- we will justify that this at the end of the proof. If the closed walk uses all the edges of , then is an Eulerian cycle, and we are done.  If doesn't use all the edges of , we can delete all the edges used in and get a graph with fewer than edges. Though might not be connected, every vertex in will have even degree, as we've subtracted an even number of edges from each vertex that visits as argued in the first part of the proof. Thus, by the inductive hypothesis each connected component will have an Eulerian cycle. Since the is connected, must include at least one point from each component of , and so we can insert the Eulerian walk on the edges of each component of from each component into when we reach that component, to obtain a closed walk that uses all the edges of exactly once, as desired.  All that remains is to justify that contains at least one closed walk, given that every vertex has even degree and it contains at least one edge. We form a walk by starting at any vertex and at each step choosing any edge we've never traversed before at random as the next step of the walk. We claim that must eventually return back to the starting vertex . Since is finite, and we don't repeat edges, the only way we could fail to return to would be if our walk \"got stuck\" -- that is, at some point we reach a vertex and find that every edge out of has already been traversed. However, we know that has an even number of edges, and also arguing as in the first paragraph of the proof that every time the walk visits it must use up two edges, one for arrival and one for departure. Hence, when we arrive at at any time we must have used up an odd number of edges at -- an even number from all the previous times we have visited , plus one more that we just arrived from. Since has even degree, there must always be at least one edge available for us to choose from, and so we can never \"get stuck\" and will eventually reach again.   Note that it does not say: \"A graph is Eulerian if and only if it is connected and every vertex has even degree.\" This statement in quotation marks is false, but for \"stupid\" reasons. If is Eulerian, and is the graph with vertices wit no edges, then is Eulerian but not connected. These are the only examples of such graphs.   A connected graph is semi-Eulerian if and only if it has exactly two vertices with odd degree.  A minor modification of our argument for Eulerian graphs shows that the condition is necessary. Suppose that is semi-Eulerian, with Eulerian path . Then at any vertex other than the starting or ending vertices, we can pair the entering and leaving edges up to get an even number of edges.  However, at the first vertex the path leaves along the first time but never enters it accordingly, so that has an odd degree; similarly, at the path enters one final time along without leaving, and so also has an odd degree.  To see the condition is sufficient we could also modify the argument for the Eulerian case slightly, but it is slicker instead to reduce to the Eulerian case. Suppose that is connected, and that vertices and have odd degree and all other vertices of have even degree. Then we can construct a new graph by adding an extra edge to . Then is connected and every vertex has even degree, and so it has an Eulerian cycle. Deleting the edge that we added from this cycle gives an Eulerian path from to in .   "
},
{
  "id": "bridges_konigsberg",
  "level": "2",
  "url": "s_walks_eulerian.html#bridges_konigsberg",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " The city of Konigsburg in Euler's time   "
},
{
  "id": "s_walks_eulerian-4-5",
  "level": "2",
  "url": "s_walks_eulerian.html#s_walks_eulerian-4-5",
  "type": "Checkpoint",
  "number": "2.2.2",
  "title": "",
  "body": "Which graphs have walks that use every vertex and edge exactly once? "
},
{
  "id": "s_walks_eulerian-4-6",
  "level": "2",
  "url": "s_walks_eulerian.html#s_walks_eulerian-4-6",
  "type": "Definition",
  "number": "2.2.3",
  "title": "",
  "body": "Let be a graph. An Eulerian cycle is a closed walk that uses every edge of exactly once.  If has an Eulerian cycle, we say that is Eulerian .  If we weaken the requirement, and do not require the walk to be closed, we call it an Euler path, and if a graph has an Eulerian path but not an Eulerian cycle, we say is semi-Eulerian "
},
{
  "id": "thm_eulerian",
  "level": "2",
  "url": "s_walks_eulerian.html#thm_eulerian",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "",
  "body": "A connected graph is Eulerian if and only if every vertex of has even degree "
},
{
  "id": "fig_walkdrawing_stupid",
  "level": "2",
  "url": "s_walks_eulerian.html#fig_walkdrawing_stupid",
  "type": "Figure",
  "number": "2.2.5",
  "title": "",
  "body": " Example of a walk    "
},
{
  "id": "s_walks_eulerian-5-14",
  "level": "2",
  "url": "s_walks_eulerian.html#s_walks_eulerian-5-14",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": " Let's see an example of how the process of finding an Eulerian path works for the graph in Figure below.   A graph   It probably isn't hard to immediately find an Eulerian cycle for just by examination, but to illustrate the algorithm to begin with, we are going to deliberately choose a cycle that doesn't use every edge, the cycle aeijgba show in the next figure:   Initializing with a closed walk in    To extend our cycle to an Eulerian cycle, we delete all the edges used in the graph, and study the remaining graph. In our case, this graph has two connected components, a four cycle and a three cycle. Both of these are cycles themselves, they're trivially Eulerian, -- in general, it might take some work to find an Eulerian cycle for the components, but won't be too hard as the graph will be smaller.   Parts of missed by our walk    Finally, we stitch our Eulerian paths together. We follow our initial cycle that wasn't an Eulerian cycle, and the first time we hit a vertex that's in one of the other cycles, we insert that cycle in before we continue along our original path. In our example, our original cycle was aeijgba. a is not eitehr of the other components, but e is in the four cycle, so before we continue on our original cycle to i, we insert the four cycle ehije, giving aehije. We now continue along our original cycle, adding ei, ij, jg, until we reach a vertex g that's in one of the added cycles, which we then insert, giving aehijeijgcdg as our cycle so far.  Continuing this process, we find aehijeijgcdgba as an Eulerian cycle.   The Eulerian cycle stitched together    "
},
{
  "id": "s_walks_eulerian-5-15",
  "level": "2",
  "url": "s_walks_eulerian.html#s_walks_eulerian-5-15",
  "type": "Proof",
  "number": "2.2.3.1",
  "title": "",
  "body": " We first show that if is Eulerian, then every vertex has even degree. For suppose the Eulerian cycle visits the vertex times. Each time it visits it must arrive by one edge, and leave by a different edge. Since the walk is Eulerian, every edge adjacent to will be used exactly once by the walk, and so we see that as desired.  Now we suppose that is connected and that every vertex has even degree. We will induct on the number of edges of . If it has no edges, then the theorem is vacuously true -- we can just take the empty walk.  For the inductive step, suppose that is connected with edges, and that every vertex of has even degree. Further assume, for the inductive hypothesis, that every graph with these properties and less than edges is Eulerian.  Suppose for now that we can find a closed walk in that doesn't repeat any edges -- we will justify that this at the end of the proof. If the closed walk uses all the edges of , then is an Eulerian cycle, and we are done.  If doesn't use all the edges of , we can delete all the edges used in and get a graph with fewer than edges. Though might not be connected, every vertex in will have even degree, as we've subtracted an even number of edges from each vertex that visits as argued in the first part of the proof. Thus, by the inductive hypothesis each connected component will have an Eulerian cycle. Since the is connected, must include at least one point from each component of , and so we can insert the Eulerian walk on the edges of each component of from each component into when we reach that component, to obtain a closed walk that uses all the edges of exactly once, as desired.  All that remains is to justify that contains at least one closed walk, given that every vertex has even degree and it contains at least one edge. We form a walk by starting at any vertex and at each step choosing any edge we've never traversed before at random as the next step of the walk. We claim that must eventually return back to the starting vertex . Since is finite, and we don't repeat edges, the only way we could fail to return to would be if our walk \"got stuck\" -- that is, at some point we reach a vertex and find that every edge out of has already been traversed. However, we know that has an even number of edges, and also arguing as in the first paragraph of the proof that every time the walk visits it must use up two edges, one for arrival and one for departure. Hence, when we arrive at at any time we must have used up an odd number of edges at -- an even number from all the previous times we have visited , plus one more that we just arrived from. Since has even degree, there must always be at least one edge available for us to choose from, and so we can never \"get stuck\" and will eventually reach again.  "
},
{
  "id": "s_walks_eulerian-5-16",
  "level": "2",
  "url": "s_walks_eulerian.html#s_walks_eulerian-5-16",
  "type": "Remark",
  "number": "2.2.11",
  "title": "",
  "body": "Note that it does not say: \"A graph is Eulerian if and only if it is connected and every vertex has even degree.\" This statement in quotation marks is false, but for \"stupid\" reasons. If is Eulerian, and is the graph with vertices wit no edges, then is Eulerian but not connected. These are the only examples of such graphs.  "
},
{
  "id": "s_walks_eulerian-5-17",
  "level": "2",
  "url": "s_walks_eulerian.html#s_walks_eulerian-5-17",
  "type": "Theorem",
  "number": "2.2.12",
  "title": "",
  "body": "A connected graph is semi-Eulerian if and only if it has exactly two vertices with odd degree. "
},
{
  "id": "s_walks_eulerian-5-18",
  "level": "2",
  "url": "s_walks_eulerian.html#s_walks_eulerian-5-18",
  "type": "Proof",
  "number": "2.2.3.2",
  "title": "",
  "body": "A minor modification of our argument for Eulerian graphs shows that the condition is necessary. Suppose that is semi-Eulerian, with Eulerian path . Then at any vertex other than the starting or ending vertices, we can pair the entering and leaving edges up to get an even number of edges.  However, at the first vertex the path leaves along the first time but never enters it accordingly, so that has an odd degree; similarly, at the path enters one final time along without leaving, and so also has an odd degree.  To see the condition is sufficient we could also modify the argument for the Eulerian case slightly, but it is slicker instead to reduce to the Eulerian case. Suppose that is connected, and that vertices and have odd degree and all other vertices of have even degree. Then we can construct a new graph by adding an extra edge to . Then is connected and every vertex has even degree, and so it has an Eulerian cycle. Deleting the edge that we added from this cycle gives an Eulerian path from to in . "
},
{
  "id": "s_walks_hamiltonian",
  "level": "1",
  "url": "s_walks_hamiltonian.html",
  "type": "Section",
  "number": "2.3",
  "title": "Hamiltonian cycles",
  "body": " Hamiltonian cycles  We now introduce the concept of Hamiltonian walks. Though on the surface the question seems very similar to determining whether or not a graph is Eulerian, it turns out to be much more difficult.   A graph is Hamiltonian if it has a closed walk that uses every vertex exactly once; such a path is called a Hamiltonian cycle  First, some very basic examples:  The cycle graph is Hamiltonian.  Any graph obtained from by adding edges is Hamiltonian  The path graph is not Hamiltonian.   > The Icosian game (from Puzzle Musuem ) and its solution (from Wikipedia )      The term Hamiltonian comes from William Hamiltonian, who invented (a not very successful) board game he termed the \"icosian game\", which was about finding Hamiltonian cycles on the dodecahedron graph (and possibly its subgraphs).  The main thing you'll need to be able to do with Hamiltonian graphs is decide whether a given graph is Hamiltonian or not. Although the definition of Hamiltonian graph is very similar to that of Eulerian graph, it turns out the two concepts behave very differently. While Euler's Theorem gave us a very easy criterion to check to see whether or not a graph Eulerian, there is no such criterion to see if a graph is Hamiltonian or not. It turns out that deciding whether or not a graph is Hamiltonian is NP-complete, meaning that if we could solve that problem efficiently, then you could solve a host of other difficult problems efficiently as well.  It may seem unfair, then, to ask whether a graph is Hamiltonian or not. But it's only in a very theoretical way that the problem is extremely difficult -- as the number of vertices get very large, the problem gets harder and harderquickly. For any given graph with a low number of vertices, there aren't that many possibilities to check.  If a graph is Hamiltonian, then by far the best way to show it is to exhibit a Hamiltonian cycle, as in . When the graph isn't Hamiltonian, things become more interesting.  The most natural way to prove a graph isn't Hamiltonian is to do a case by case analysis of possible paths, showing it doesn't work. For instance, in lecture we outlined the proof that if you remove a vertex from the Icosian graph, than the result isn't Hamiltonian. A natural way to do this is to pick a vertex, and consider the possible pairs of edges the path might take through that vertex. For each possibility, we know some edges won't be used, and can go further along that way.  In general, brute-force case-by-case analyses are proofs we want to avoid when possible, because it can be difficult to make sure we have actually found all the cases, and the proofs aren't always enlightening. It's much better when we can find a \"reason\" why the graph isn't Hamiltonian.   A local configuration that can't exist in a Hamiltonian graph     shows a portion of a larger graph . The exact number of other vertices in the graph that and are adjacent to is not important; what matters is that and are each adjacent to two vertices, and . Any path through would have to use and , but so would any path through . But then we have a small four cycle which doesn't use any other vertices in the graph, and so cannot be HAmiltonian.   Suppose that is bipartite and Hamiltonian, with red vertices and blue vertices.  Consider a Hamiltonian path in . Since every edge is between a red and blue vertex, the vertices in the path must alternate between red and blue. Considering every other edge of the cycle pairs each red vertex with a blue vertex, and hence .  The contrapositive of can be used to show graphs aren't Hamiltonian: if is bipartite but doesn't have the same number of red vertices and blue vertices, then it can't be Hamiltonian.  The Petersen Graph is not Hamiltonian Of course, a case-by-case analysis of possibile Hamiltonian cycles is possible. The number of cases can be reduced by using symmetries of the Petersen graph. Instead, for variation and to illustrate a different proof technique, we will use another method.  Assume for contradiction that the Petersen graph is Hamiltonian, and draw the ten vertices around the cycle. The Hamiltonian cycle uses 10 of the 15 edges in the Petersen graph, and so there must be 5 more edges, with each vertex incident to one of them, as in the Petersen graph every vertex has degree 3.  Let's analyse where else the edge adjacent to could go. It can't go to itself, as the Petersen graph has no loops, and it can't go to or as the Petersen graph has no multiple edges. If it went to or it would make a three cycle, which the Petersen graph doesn't have, and if it went to or , there'd be a four cycle. Hence, the only options are is adjacent to or . By reversing the direction of the Hamiltonian path, and are equivalent, and there are only two cases.  But the same analysis holds for every vertex: the extra edge at any vertex can either go to the opposite side of the circle, or be \"off by one\" and skip three vertices to either direction.  We now claim that not all the extra edges can go \"directly across\" -- there must be at least one edge that's off by one. If all the extra edges went directly across, then would go to , and would go to , and would be a 4 cycle.  Hence, without loss of generality we may assume that the extra edge at is . Let us then consider the extra edge at . It can't go directly across, as that is which already has its extra edge. Hence it must be off by one, and go to either or . But either way we get a four cycle: either , or . Hence, we have a contradiction, and the Petersen graph cannot be Hamiltonian.   Finally, Ore's Theorem, a positive result, giving conditions which guarantee that a graph has a Hamiltonian cycle. First, a little bit of intuition. If we take an edge to a Hamiltonian graph the result is still Hamiltonian, and the complete graphs are Hamiltonian. Thus, one might expect that a graph with \"enough\" edges is Hamiltonian.  The trick is in finding an interesting meaning of the word \"enough\". Simply counting the number of edges does not give very interesting bounds on what \"enough\" means, however -- the complete graph has edges, but we can make it non-Hamiltonian by removing only edges: simply pick a vertex and remove all but one of the edges coming out of ; then will now have degree 1, and hence the resulting graph cannot be Hamiltonian.  Ore's Theorem  Let be a simple graph with vertices, and assume that whenever two distinct vertices are not adjacent, we have . Then is Hamiltonian.  We will argue by contradiction, and begin by passing to a maximal counterexample. Note that if satisfies the hypotheses, and we add an edge to between two non-adjacent vertices and , then the result will still satisfy the hypothesis. Indeed, we've only increased the degree of some vertices. So, we had a counterexample to Ore's Theorem, we could iteratively add edges to that didn't create Hamiltonian cycles, until we got a graph that satisfies the hypotheses of Ore's theorem, desn't have any Hamiltonian cycles, but if we add any edge to the result is Hamiltonian.  We now observe that such a must have a Hamiltonian path : indeed, pick any edge not in and add it to . THe resulting graph is by assumption Hamiltonian, and since wasn't Hamiltonian, the Hamiltonian cycle must contain the edge . Deleting the edge from the Hamiltonian cycle gives a Hamiltonian path in .  Thus, let be a Hamiltonian path in . We know and are not adjacent, as otherwise would be Hamiltonian. Thus, since satisfies the hypothesis of Ore's theorem, we know . We already have one edge adjacent to , and one edge adjacent to , and so there must be at least other edges adjacent to one or other of these vertices. We will see that no matter how we add edges to these two vertices, we will create a Hamiltonian cycle.  To see this, note there is ever an with adjacent to and adjacent to , then would have a Hamiltonian cycle: namely . Now, there are different vertices we can add edges to to, namely , and similarly there are vertices we can add edges connecting to, namely . We arrange these edges into a a grid with 2 rows and columns, so that the two edges in each column are and , a pair of edges that can form a Hamiltonian cycle as in the last paragraph.  As we need to add at least edges, but we only have columns, there must be at least one column that contains two edges by the pigeonhole principle, but then we can create a Hamiltonian cycle using those two edges and the edges in our Hamiltonian path.    Note that Ore's Theorem is not an if and only if, and so Ore's Theorem cannot be used to prove that graphs aren't Hamiltonian. Indeed, there are plenty of graphs that are Hamiltonian but do not satisfy the hypotheses of Ore's Theorem. For instance, the cycle graph is Hamiltonian, but every vertex has degree 2, so if the hypotheses of Ore's Theorem are not satisfied.  We also highlight that the proof began by considering a maximal counterexample to Ore's Theorem, and considering maximal\/minimal counterexamples is often a useful proof technique, as you the maximality\/minimality gives you some extra structure to work with.  "
},
{
  "id": "s_walks_hamiltonian-3",
  "level": "2",
  "url": "s_walks_hamiltonian.html#s_walks_hamiltonian-3",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "A graph is Hamiltonian if it has a closed walk that uses every vertex exactly once; such a path is called a Hamiltonian cycle "
},
{
  "id": "fig-icosian",
  "level": "2",
  "url": "s_walks_hamiltonian.html#fig-icosian",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": "> The Icosian game (from Puzzle Musuem ) and its solution (from Wikipedia )     "
},
{
  "id": "s_walks_hamiltonian-13",
  "level": "2",
  "url": "s_walks_hamiltonian.html#s_walks_hamiltonian-13",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": " A local configuration that can't exist in a Hamiltonian graph     shows a portion of a larger graph . The exact number of other vertices in the graph that and are adjacent to is not important; what matters is that and are each adjacent to two vertices, and . Any path through would have to use and , but so would any path through . But then we have a small four cycle which doesn't use any other vertices in the graph, and so cannot be HAmiltonian.  "
},
{
  "id": "lemma-bipartite-hamiltonian",
  "level": "2",
  "url": "s_walks_hamiltonian.html#lemma-bipartite-hamiltonian",
  "type": "Lemma",
  "number": "2.3.5",
  "title": "",
  "body": "Suppose that is bipartite and Hamiltonian, with red vertices and blue vertices.  Consider a Hamiltonian path in . Since every edge is between a red and blue vertex, the vertices in the path must alternate between red and blue. Considering every other edge of the cycle pairs each red vertex with a blue vertex, and hence . "
},
{
  "id": "s_walks_hamiltonian-16",
  "level": "2",
  "url": "s_walks_hamiltonian.html#s_walks_hamiltonian-16",
  "type": "Lemma",
  "number": "2.3.6",
  "title": "",
  "body": "The Petersen Graph is not Hamiltonian Of course, a case-by-case analysis of possibile Hamiltonian cycles is possible. The number of cases can be reduced by using symmetries of the Petersen graph. Instead, for variation and to illustrate a different proof technique, we will use another method.  Assume for contradiction that the Petersen graph is Hamiltonian, and draw the ten vertices around the cycle. The Hamiltonian cycle uses 10 of the 15 edges in the Petersen graph, and so there must be 5 more edges, with each vertex incident to one of them, as in the Petersen graph every vertex has degree 3.  Let's analyse where else the edge adjacent to could go. It can't go to itself, as the Petersen graph has no loops, and it can't go to or as the Petersen graph has no multiple edges. If it went to or it would make a three cycle, which the Petersen graph doesn't have, and if it went to or , there'd be a four cycle. Hence, the only options are is adjacent to or . By reversing the direction of the Hamiltonian path, and are equivalent, and there are only two cases.  But the same analysis holds for every vertex: the extra edge at any vertex can either go to the opposite side of the circle, or be \"off by one\" and skip three vertices to either direction.  We now claim that not all the extra edges can go \"directly across\" -- there must be at least one edge that's off by one. If all the extra edges went directly across, then would go to , and would go to , and would be a 4 cycle.  Hence, without loss of generality we may assume that the extra edge at is . Let us then consider the extra edge at . It can't go directly across, as that is which already has its extra edge. Hence it must be off by one, and go to either or . But either way we get a four cycle: either , or . Hence, we have a contradiction, and the Petersen graph cannot be Hamiltonian.  "
},
{
  "id": "s_walks_hamiltonian-19",
  "level": "2",
  "url": "s_walks_hamiltonian.html#s_walks_hamiltonian-19",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "Ore’s Theorem.",
  "body": "Ore's Theorem  Let be a simple graph with vertices, and assume that whenever two distinct vertices are not adjacent, we have . Then is Hamiltonian.  We will argue by contradiction, and begin by passing to a maximal counterexample. Note that if satisfies the hypotheses, and we add an edge to between two non-adjacent vertices and , then the result will still satisfy the hypothesis. Indeed, we've only increased the degree of some vertices. So, we had a counterexample to Ore's Theorem, we could iteratively add edges to that didn't create Hamiltonian cycles, until we got a graph that satisfies the hypotheses of Ore's theorem, desn't have any Hamiltonian cycles, but if we add any edge to the result is Hamiltonian.  We now observe that such a must have a Hamiltonian path : indeed, pick any edge not in and add it to . THe resulting graph is by assumption Hamiltonian, and since wasn't Hamiltonian, the Hamiltonian cycle must contain the edge . Deleting the edge from the Hamiltonian cycle gives a Hamiltonian path in .  Thus, let be a Hamiltonian path in . We know and are not adjacent, as otherwise would be Hamiltonian. Thus, since satisfies the hypothesis of Ore's theorem, we know . We already have one edge adjacent to , and one edge adjacent to , and so there must be at least other edges adjacent to one or other of these vertices. We will see that no matter how we add edges to these two vertices, we will create a Hamiltonian cycle.  To see this, note there is ever an with adjacent to and adjacent to , then would have a Hamiltonian cycle: namely . Now, there are different vertices we can add edges to to, namely , and similarly there are vertices we can add edges connecting to, namely . We arrange these edges into a a grid with 2 rows and columns, so that the two edges in each column are and , a pair of edges that can form a Hamiltonian cycle as in the last paragraph.  As we need to add at least edges, but we only have columns, there must be at least one column that contains two edges by the pigeonhole principle, but then we can create a Hamiltonian cycle using those two edges and the edges in our Hamiltonian path.   "
},
{
  "id": "s_walks_exercises",
  "level": "1",
  "url": "s_walks_exercises.html",
  "type": "Exercises",
  "number": "2.4",
  "title": "Exercises",
  "body": "   The questions in this exercise pertain to the graph shown in .    What is the degree of vertex ?  What is the degree of vertex ?  How many vertices of degree are there in ? List them.  Find a cycle of length in .  What is the length of a shortest path from to ?  What is the length of a shortest path from to ?  Find a path of length from vertex to vertex .    A graph         Draw a graph with vertices, all of odd degree, that does not contain a path of length or explain why such a graph does not exist.      Find an eulerian circuit in the graph in or explain why one does not exist.   A graph          Consider the graph in . Determine if the graph is eulerian. If it is, find an eulerian circuit. If it is not, explain why it is not. Determine if the graph is hamiltonian. If it is, find a hamiltonian cycle. If it is not, explain why it is not.   A graph      "
},
{
  "id": "s_walks_exercises-1",
  "level": "2",
  "url": "s_walks_exercises.html#s_walks_exercises-1",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": "  The questions in this exercise pertain to the graph shown in .    What is the degree of vertex ?  What is the degree of vertex ?  How many vertices of degree are there in ? List them.  Find a cycle of length in .  What is the length of a shortest path from to ?  What is the length of a shortest path from to ?  Find a path of length from vertex to vertex .    A graph      "
},
{
  "id": "s_walks_exercises-2",
  "level": "2",
  "url": "s_walks_exercises.html#s_walks_exercises-2",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "",
  "body": "  Draw a graph with vertices, all of odd degree, that does not contain a path of length or explain why such a graph does not exist.   "
},
{
  "id": "s_walks_exercises-3",
  "level": "2",
  "url": "s_walks_exercises.html#s_walks_exercises-3",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "",
  "body": "  Find an eulerian circuit in the graph in or explain why one does not exist.   A graph       "
},
{
  "id": "s_walks_exercises-4",
  "level": "2",
  "url": "s_walks_exercises.html#s_walks_exercises-4",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "",
  "body": "  Consider the graph in . Determine if the graph is eulerian. If it is, find an eulerian circuit. If it is not, explain why it is not. Determine if the graph is hamiltonian. If it is, find a hamiltonian cycle. If it is not, explain why it is not.   A graph     "
},
{
  "id": "s_graphalgorithms_prufer",
  "level": "1",
  "url": "s_graphalgorithms_prufer.html",
  "type": "Section",
  "number": "3.1",
  "title": "Prüfer Codes",
  "body": " Prüfer Codes  This section covers the Prüfer Code, a bijection between labelled trees and certain sequences of integers. This bijection allows us to prove Cayley's theorem, giving a count of such labelled trees.  Given a combinatorial structure, such as a graph or a tree, it is natural to ask how many of such structures there are. Often, there is no nice formula, for instance, for the number of different trees on vertices there. But if the vertices are labelled, then it turns out there's a nice answer.  Labelled tree  A labelled tree on vertices is a tree with vertices, which are labelled     Cayley's Theorem  There are labelled trees on vertices.    One more convenient way of writing down a labelled tree is to write down all the edges. If there tree has vertices, then there are edges, and writing down all the edges takes numbers between . However, we see that we're writing down the same tree lots of different times, by changing the order of the edges, and which vertex from each edge we write first. Furthermore, not every sequence of numbers between will result in a tree.  To fix this problem, we will write down the edges in a particular order. Every tree has at least two leaves, and deleting a leaf gives a small tree. We will use these facts to give a systematic ordering to the edges in a labelled tree, as follows: the first edge will be the edge connecting the leaf with the smallest label to the rest of the tree. We will record that edge, with the leaf on the bottom row, and the \"parent\" vertex, i.e., the vertex the leaf is connected to, in the top row. Deleting the leaf and the vertex gives a tree with one fewer vertex, and we iterate the process.  Pruning Algorithm  Input: A labelled tree on vertices.  Output: A table with entries in that records the edges of in a specified order.   Find the leaf with the lowest label; it will have one edge , connecting it to some vertex (its \"parent\") . Form a new tree by deleting and , and record in the output table, putting the deleted vertex in the bottom row and its parent above it in the top row.   This method fixes the problem of the ordering of the edges not being unique, but as of now we are still recording more information than needed. But note the following: since we delete a vertex when we put it in the bottom row, no number will appear twice on the bottom row. The last column is the last two vertices existing, and if we look at the bottom row and the last entry on the top row, we see that every number from 1 to will appear exactly once in these spots.  Prüfer code If record the edges of a tree as in the Pruning Algorithm, the first number appear in the top row is the Prüfer code of  To finish the proof of Cayley's Theorem, we need to show that the Prüfer code is a bijection. The easiest way to do this is to show that it has an inverse; that is, given any sequence of numbers between 1 and , we can construct a tree have that sequence as its Prüfer code.  This is most easily done by filling in the numbers we deleted from the table of edges to get the Prüfer code. We will in the numbers on the bottom row from left to right. The first number on the bottom row will be the lowest number that does not appear in the Prüfer code. Delete the first column, and then iterate -- the next number will be the lowest number we haven't used, and that doesn't appear in the remainder of the Prüfer code.  Another way to phrase the last line, is that the next number filled in is always the lowest number the doesn't appear as the bottom entry on one of the columns.   Suppose has Prüfer code 4,4,1,4,5,5. This code has length 6, so we looking to complete it by filling in numbers from 1 to 8. We illustrate the process step by step.   The lowest number that doesn't appear is 2, so we fill that in on the bottom of the first column. We no longer have to consider the 4 directly above this 2, as it is not the bottom element of its column.     4  4  1  4  5  5      2                 To fill in the next cell, we put the lowest number not occuring as the lowest element of a column, namely 3.     4  4  1  4  5  5      2  3               And now the lowest term not on the bottom of its column is 6, so we add that:     4  4  1  4  5  5      2  3  6             Now the only 1 appearing has an element beneath it, and so 1 gets added in the next column:     4  4  1  4  5  5      2  3  6  1           And now all the 4s have been passed, so the next number is 4. We jump ahead and fill in the two numbers under 5 as well:     4  4  1  4  5  5      2  3  6  1  4  7       The two numbers we haven't used yet are 5 and 8, so they are the entries in the last column, giving us the completed table of edges     4  4  1  4  5  5  8    2  3  6  1  4  7  5      Having constructed the table encoding all the edges, we can now draw the labelled tree with those edges   The tree with Prüfer code 441455     "
},
{
  "id": "s_graphalgorithms_prufer-4",
  "level": "2",
  "url": "s_graphalgorithms_prufer.html#s_graphalgorithms_prufer-4",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Labelled tree.",
  "body": "Labelled tree  A labelled tree on vertices is a tree with vertices, which are labelled    "
},
{
  "id": "s_graphalgorithms_prufer-5",
  "level": "2",
  "url": "s_graphalgorithms_prufer.html#s_graphalgorithms_prufer-5",
  "type": "Theorem",
  "number": "3.1.2",
  "title": "Cayley’s Theorem.",
  "body": "Cayley's Theorem  There are labelled trees on vertices.   "
},
{
  "id": "s_graphalgorithms_prufer-8",
  "level": "2",
  "url": "s_graphalgorithms_prufer.html#s_graphalgorithms_prufer-8",
  "type": "Algorithm",
  "number": "3.1.3",
  "title": "Pruning Algorithm.",
  "body": "Pruning Algorithm  Input: A labelled tree on vertices.  Output: A table with entries in that records the edges of in a specified order.   Find the leaf with the lowest label; it will have one edge , connecting it to some vertex (its \"parent\") . Form a new tree by deleting and , and record in the output table, putting the deleted vertex in the bottom row and its parent above it in the top row.  "
},
{
  "id": "s_graphalgorithms_prufer-10",
  "level": "2",
  "url": "s_graphalgorithms_prufer.html#s_graphalgorithms_prufer-10",
  "type": "Definition",
  "number": "3.1.4",
  "title": "Prüfer code.",
  "body": "Prüfer code If record the edges of a tree as in the Pruning Algorithm, the first number appear in the top row is the Prüfer code of "
},
{
  "id": "s_graphalgorithms_prufer-14",
  "level": "2",
  "url": "s_graphalgorithms_prufer.html#s_graphalgorithms_prufer-14",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": " Suppose has Prüfer code 4,4,1,4,5,5. This code has length 6, so we looking to complete it by filling in numbers from 1 to 8. We illustrate the process step by step.   The lowest number that doesn't appear is 2, so we fill that in on the bottom of the first column. We no longer have to consider the 4 directly above this 2, as it is not the bottom element of its column.     4  4  1  4  5  5      2                 To fill in the next cell, we put the lowest number not occuring as the lowest element of a column, namely 3.     4  4  1  4  5  5      2  3               And now the lowest term not on the bottom of its column is 6, so we add that:     4  4  1  4  5  5      2  3  6             Now the only 1 appearing has an element beneath it, and so 1 gets added in the next column:     4  4  1  4  5  5      2  3  6  1           And now all the 4s have been passed, so the next number is 4. We jump ahead and fill in the two numbers under 5 as well:     4  4  1  4  5  5      2  3  6  1  4  7       The two numbers we haven't used yet are 5 and 8, so they are the entries in the last column, giving us the completed table of edges     4  4  1  4  5  5  8    2  3  6  1  4  7  5      Having constructed the table encoding all the edges, we can now draw the labelled tree with those edges   The tree with Prüfer code 441455    "
},
{
  "id": "s_graphalgorithms_min-wt-span",
  "level": "1",
  "url": "s_graphalgorithms_min-wt-span.html",
  "type": "Section",
  "number": "3.2",
  "title": "Minimum Weight Spanning Trees",
  "body": " Minimum Weight Spanning Trees   In this section, we consider pairs where is a connected graph and . For each edge , the quantity is called the weight weight of . Given a set of edges, we define the weight of , denoted , by setting . In particular, the weight of a spanning tree is just the sum of the weights of the edges in . tree spanning   Weighted graphs arise in many contexts. One of the most natural is when the weights on the edges are distances or costs. For example, consider the weighted graph in . Suppose the vertices represent nodes of a network and the edges represent the ability to establish direct physical connections between those nodes. The weights associated to the edges represent the cost (let's say in thousands of dollars) of building those connections. The company establishing the network among the nodes only cares that there is a way to get data between each pair of nodes. Any additional links would create redundancy in which they are not interested at this time. A spanning tree of the graph ensures that each node can communicate with each of the others and has no redundancy, since removing any edge disconnects it. Thus, to minimize the cost of building the network, we want to find a minimum weight (or cost) spanning tree.   A weighted graph    To do this, this section considers the following problem:   Find a minimum weight spanning tree of .   To solve this problem, we will develop two efficient graph algorithms, each having certain computational advantages and disadvantages. Before developing the algorithms, we need to establish some preliminaries about spanning trees and forests.    Preliminaries  The following proposition about the number of components in a spanning forest of a graph has an easy inductive proof. You are asked to provide it in the exercises.    Let be a graph on vertices, and let be a spanning forest. Then . Furthermore, if , then has components. In particular, is a spanning tree if and only if it contains edges.    The following proposition establishes a way to take a spanning tree of a graph, remove an edge from it, and add an edge of the graph that is not in the spanning tree to create a new spanning tree. Effectively, the process exchanges two edges to form the new spanning tree, so we call this the exchange principle .   Exchange Principle   Let be spanning tree in a graph , and let be an edge of which does not belong to . Then  There is a unique path with (a) ; (b) ; and (c) for each .  For each , let and then set  , we exchange edge for edge . Then is a spanning tree of .      For the first fact, it suffices to note that if there were more than one distinct path from to in , we would be able to find a cycle in . This is impossible since it is a tree. For the second, we refer to . The black and green edges in the graph shown at the left represent the spanning tree . Thus, lies on the unique path from to in and is an edge of  not in . Adding to creates a graph with a unique cycle, since had a unique path from to . Removing (which could be any edge of the path, as stated in the proposition) destroys this cycle. Thus is a connected acyclic subgraph of with edges, so it is a spanning tree.   The exchange principle         For both of the algorithms we develop, the argument to show that the algorithm is optimal rests on the following technical lemma. To avoid trivialities, we assume .    Let be a spanning forest of and let be a component of . Also, let be an edge of minimum weight among all edges with one endpoint in and the other not in . Then among all spanning trees of that contain the forest , there is one of minimum weight that contains the edge .    Let be any spanning tree of minimum weight among all spanning trees that contain the forest , and suppose that is not an edge in . (If it were an edge in , we would be done.) Then let be the unique path in with (a) ; (b) ; and (c) for each . Without loss of generality, we may assume that is a vertex in while does not belong to . Then there is a least non-negative integer for which is in and is not in . It follows that is in for all with .  Let . The edge has minimum weight among all edges with one endpoint in and the other not in , so . Now let be the tree obtained by exchanging the edge for edge . It follows that . Furthermore, contains the spanning forest as well as the edge . It is therefore the minimum weight spanning tree we seek.     Although Bob's combinatorial intuition has improved over the course he doesn't quite understand why we need special algorithms to find minimum weight spanning trees. He figures there can't be that many spanning trees, so he wants to just write them down. Alice groans as she senses that Bob must have been absent when the material from was discussed. In that section, we learned that a graph on vertices can have as many as spanning trees (or horrors, the instructor may have left it off the syllabus). Regardless, this exhaustive approach is already unusable when . Dave mumbles something about being greedy and just adding the lightest edges one-by-one while never adding an edge that would make a cycle. Zori remembers a strategy like this working for finding the height of a poset, but she's worried about the nightmare situation that we learned about with using FirstFit to color graphs. Alice agrees that greedy algorithms have an inconsistent track record but suggests that may be enough to get one to succeed here.     Kruskal's Algorithm  In this section, we develop one of the best known algorithms for finding a minimum weight spanning tree. It is known as Kruskal's Algorithm , although some prefer the descriptive label Avoid Cycles because of the way it builds the spanning tree.  To start Kruskal's algorithm, we sort the edges according to weight. To be more precise, let denote the number of edges in . Then label the edges as so that . Any of the many available efficient sorting algorithms can be used to do this step.  Once the edges are sorted, Kruskal's algorithm proceeds to an initialization step and then inductively builds the spanning tree :   Kruskal's Algorithm  minimum weight spanning tree Kruskal's algorithm for  Kruskal's algorithm      Initialization. Set and .   Inductive Step.  While , let be the least non-negative integer so that and there are no cycles in . Then (using pseudo-code) set        The correctness of Kruskal's Algorithm follows from an inductive argument. First, the set is initialized as the empty set, so there is certainly a minimum weight spanning tree containing all the edges in . Now suppose that for some with , and there is a minimum weight spanning tree containing all the edges in . Let be the spanning forest determined by the edges in , and let be the components of . For each , let be a minimum weight edge with one endpoint in and the other not in . Then the edge added to by Kruskal's Algorithm is just the edge having minimum weight. Applying and the inductive hypothesis, we know that there will still be a minimum weight spanning tree of containing all the edges of .   Kruskal's Algorithm   Let's see what Kruskal's algorithm does on the weighted graph in . It first sorts all of the edges by weight. We won't reproduce the list here, since we won't need all of it. The edge of least weight is , which has weight . It continues adding the edge of least weight, adding , , , , and . However, after doing this, the edge of lowest weight is , which has weight . This edge cannot be added, as doing so would make a cycle. Thus, the algorithm bypasses it and adds . Edge is next inspected, but it, too, would create a cycle and is eliminated from consideration. Then is added, followed by . There are now two edges of weight to be considered: and . Our sorting algorithm has somehow decided one of them should appear first, so let's say it's . After adding , we cannot add , as would form a cycle. Edge is next considered, but it would also form a cycle. However, can be added. Edges and are then bypassed. Finally, edge is added as the twelfth and final edge for this -vertex spanning tree. The full list of edges added (in order) is shown to the right. The total weight of this spanning tree is .  c k 23 a g 25 f g 26 f i 29 f j 30 b j 34 b c 39 e m 49 d l 55 d j 56 e k 59 c h 79      Prim's Algorithm  We now develop Prim's Algorithm for finding a minimum weight spanning tree. This algorithm is also known by a more descriptive label: Build Tree . We begin by choosing a root vertex . Again, the algorithm proceeds with an initialization step followed by a series of inductive steps.   Prim's Algorithm  minimum weight spanning trees Prim's algorithm for  Prim's algorithm      Initialization.  Set and .    Inductive Step.  While , let be an edge of minimum weight among all edges with one endpoint in and the other not in . If , and , update and by setting (using pseudo-code)        The correctness of Prim's algorithm follows immediately from .   Prim's Algorithm   Let's see what Prim's algorithm does on the weighted graph in . We start with vertex as the root vertex. The lightest edge connecting (the only vertex in the tree so far) to the rest of the graph is . Next, is added. This is followed by , , , and . Next, the algorithm identifies as the lightest edge connecting to the remaining vertices. Notice that this is considerably later than Kruskal's algorithm finds the same edge. The algorithm then determines that and , both of weight are the lightest edges connecting vertices in the tree to the other vertices. It picks arbitrarily, so let's say it takes . It next finds , then , and then . The final edge added is . The full list of edges added (in order) is shown to the right. The total weight of this spanning tree is . This (not surprisingly) the same weight we obtained using Kruskal's algorithm. However, notice that the spanning tree found is different, as this one contains instead of . This is not an issue, of course, since in both cases an arbitrary choice between two edges of equal weight was made.  a g 25 f g 26 f i 29 f j 30 b j 34 b c 39 c k 23 a l 56 d l 55 e k 59 e m 49 c h 79      Comments on Efficiency  An implementation of Kruskal's algorithm seems to require that the edges be sorted. If the graph has vertices and edges, this requires operations just for the sort. But once the sort is done, the process takes only steps provided you keep track of the components as the spanning forest expands. Regardless, it is easy to see that at most operations are required.  On the other hand, an implementation of Prim's algorithm requires the program to conveniently keep track of the edges incident with each vertex and always be able to identify the edge with least weight among subsets of these edges. In computer science, the data structure that enables this task to be carried out is called a heap .   "
},
{
  "id": "s_graphalgorithms_min-wt-span-2-1",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#s_graphalgorithms_min-wt-span-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "weight weight "
},
{
  "id": "fig_graphalgorithms_spantreegraph",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#fig_graphalgorithms_spantreegraph",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " A weighted graph   "
},
{
  "id": "s_graphalgorithms_min-wt-span-2-5",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#s_graphalgorithms_min-wt-span-2-5",
  "type": "Problem",
  "number": "3.2.2",
  "title": "",
  "body": " Find a minimum weight spanning tree of .  "
},
{
  "id": "prop_graphalgorithms_spanforest",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#prop_graphalgorithms_spanforest",
  "type": "Proposition",
  "number": "3.2.3",
  "title": "",
  "body": "  Let be a graph on vertices, and let be a spanning forest. Then . Furthermore, if , then has components. In particular, is a spanning tree if and only if it contains edges.   "
},
{
  "id": "s_graphalgorithms_min-wt-span-3-4",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#s_graphalgorithms_min-wt-span-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exchange principle "
},
{
  "id": "prop_graphalgorithms_exchange",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#prop_graphalgorithms_exchange",
  "type": "Proposition",
  "number": "3.2.4",
  "title": "Exchange Principle.",
  "body": " Exchange Principle   Let be spanning tree in a graph , and let be an edge of which does not belong to . Then  There is a unique path with (a) ; (b) ; and (c) for each .  For each , let and then set  , we exchange edge for edge . Then is a spanning tree of .      For the first fact, it suffices to note that if there were more than one distinct path from to in , we would be able to find a cycle in . This is impossible since it is a tree. For the second, we refer to . The black and green edges in the graph shown at the left represent the spanning tree . Thus, lies on the unique path from to in and is an edge of  not in . Adding to creates a graph with a unique cycle, since had a unique path from to . Removing (which could be any edge of the path, as stated in the proposition) destroys this cycle. Thus is a connected acyclic subgraph of with edges, so it is a spanning tree.   The exchange principle        "
},
{
  "id": "lem_graphalgorithms_tech",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#lem_graphalgorithms_tech",
  "type": "Lemma",
  "number": "3.2.6",
  "title": "",
  "body": "  Let be a spanning forest of and let be a component of . Also, let be an edge of minimum weight among all edges with one endpoint in and the other not in . Then among all spanning trees of that contain the forest , there is one of minimum weight that contains the edge .    Let be any spanning tree of minimum weight among all spanning trees that contain the forest , and suppose that is not an edge in . (If it were an edge in , we would be done.) Then let be the unique path in with (a) ; (b) ; and (c) for each . Without loss of generality, we may assume that is a vertex in while does not belong to . Then there is a least non-negative integer for which is in and is not in . It follows that is in for all with .  Let . The edge has minimum weight among all edges with one endpoint in and the other not in , so . Now let be the tree obtained by exchanging the edge for edge . It follows that . Furthermore, contains the spanning forest as well as the edge . It is therefore the minimum weight spanning tree we seek.   "
},
{
  "id": "s_graphalgorithms_min-wt-span-3-8",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#s_graphalgorithms_min-wt-span-3-8",
  "type": "Remark",
  "number": "3.2.7",
  "title": "",
  "body": " Although Bob's combinatorial intuition has improved over the course he doesn't quite understand why we need special algorithms to find minimum weight spanning trees. He figures there can't be that many spanning trees, so he wants to just write them down. Alice groans as she senses that Bob must have been absent when the material from was discussed. In that section, we learned that a graph on vertices can have as many as spanning trees (or horrors, the instructor may have left it off the syllabus). Regardless, this exhaustive approach is already unusable when . Dave mumbles something about being greedy and just adding the lightest edges one-by-one while never adding an edge that would make a cycle. Zori remembers a strategy like this working for finding the height of a poset, but she's worried about the nightmare situation that we learned about with using FirstFit to color graphs. Alice agrees that greedy algorithms have an inconsistent track record but suggests that may be enough to get one to succeed here.  "
},
{
  "id": "s_graphalgorithms_min-wt-span-4-2",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#s_graphalgorithms_min-wt-span-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Kruskal's Algorithm "
},
{
  "id": "alg_kruskal",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#alg_kruskal",
  "type": "Algorithm",
  "number": "3.2.8",
  "title": "Kruskal’s Algorithm.",
  "body": " Kruskal's Algorithm  minimum weight spanning tree Kruskal's algorithm for  Kruskal's algorithm      Initialization. Set and .   Inductive Step.  While , let be the least non-negative integer so that and there are no cycles in . Then (using pseudo-code) set       "
},
{
  "id": "s_graphalgorithms_min-wt-span-4-7",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#s_graphalgorithms_min-wt-span-4-7",
  "type": "Example",
  "number": "3.2.9",
  "title": "Kruskal’s Algorithm.",
  "body": " Kruskal's Algorithm   Let's see what Kruskal's algorithm does on the weighted graph in . It first sorts all of the edges by weight. We won't reproduce the list here, since we won't need all of it. The edge of least weight is , which has weight . It continues adding the edge of least weight, adding , , , , and . However, after doing this, the edge of lowest weight is , which has weight . This edge cannot be added, as doing so would make a cycle. Thus, the algorithm bypasses it and adds . Edge is next inspected, but it, too, would create a cycle and is eliminated from consideration. Then is added, followed by . There are now two edges of weight to be considered: and . Our sorting algorithm has somehow decided one of them should appear first, so let's say it's . After adding , we cannot add , as would form a cycle. Edge is next considered, but it would also form a cycle. However, can be added. Edges and are then bypassed. Finally, edge is added as the twelfth and final edge for this -vertex spanning tree. The full list of edges added (in order) is shown to the right. The total weight of this spanning tree is .  c k 23 a g 25 f g 26 f i 29 f j 30 b j 34 b c 39 e m 49 d l 55 d j 56 e k 59 c h 79   "
},
{
  "id": "alg_prim-2",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#alg_prim-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Prim's Algorithm "
},
{
  "id": "alg_prim-3",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#alg_prim-3",
  "type": "Algorithm",
  "number": "3.2.10",
  "title": "Prim’s Algorithm.",
  "body": " Prim's Algorithm  minimum weight spanning trees Prim's algorithm for  Prim's algorithm      Initialization.  Set and .    Inductive Step.  While , let be an edge of minimum weight among all edges with one endpoint in and the other not in . If , and , update and by setting (using pseudo-code)       "
},
{
  "id": "alg_prim-5",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#alg_prim-5",
  "type": "Example",
  "number": "3.2.11",
  "title": "Prim’s Algorithm.",
  "body": " Prim's Algorithm   Let's see what Prim's algorithm does on the weighted graph in . We start with vertex as the root vertex. The lightest edge connecting (the only vertex in the tree so far) to the rest of the graph is . Next, is added. This is followed by , , , and . Next, the algorithm identifies as the lightest edge connecting to the remaining vertices. Notice that this is considerably later than Kruskal's algorithm finds the same edge. The algorithm then determines that and , both of weight are the lightest edges connecting vertices in the tree to the other vertices. It picks arbitrarily, so let's say it takes . It next finds , then , and then . The final edge added is . The full list of edges added (in order) is shown to the right. The total weight of this spanning tree is . This (not surprisingly) the same weight we obtained using Kruskal's algorithm. However, notice that the spanning tree found is different, as this one contains instead of . This is not an issue, of course, since in both cases an arbitrary choice between two edges of equal weight was made.  a g 25 f g 26 f i 29 f j 30 b j 34 b c 39 c k 23 a l 56 d l 55 e k 59 e m 49 c h 79   "
},
{
  "id": "s_graphalgorithms_min-wt-span-6-3",
  "level": "2",
  "url": "s_graphalgorithms_min-wt-span.html#s_graphalgorithms_min-wt-span-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "heap "
},
{
  "id": "s_graphalgorithms_digraphs",
  "level": "1",
  "url": "s_graphalgorithms_digraphs.html",
  "type": "Section",
  "number": "3.3",
  "title": "Digraphs",
  "body": " Digraphs  In this section, we introduce another useful variant of a graph. In a graph, the existence of an edge can be used to model a connection between and that goes in both ways. However, sometimes such a model is insufficient. For instance, perhaps it is possible to fly from Atlanta directly to Fargo but not possible to fly from Fargo directly to Atlanta. In a graph representing the airline network, an edge between Atlanta and Fargo would lose the information that the flights only operate in one direction. To deal with this problem, we introduce a new discrete structure. A digraph digraph graph directed digraph  is a pair where is a vertex set and with for every . We consider the pair as a directed edge edge directed from to . Note that for distinct vertices and from , the ordered pairs and are distinct, so the digraph may have one, both or neither of the directed edges and . This is in contrast to graphs, where edges are sets, so and are the same.  Diagrams of digraphs use arrowheads on the edges to indicate direction. This is illustrated in . For example, the digraph illustrated there contains the edge but not the edge . It does contain both edges and , however.   A Digraph    When is a digraph, a sequence of distinct vertices is called a directed path path directed from to when is a directed edge in for every . A directed path is called a directed cycle cycle directed when is a directed edge of .  "
},
{
  "id": "s_graphalgorithms_digraphs-2",
  "level": "2",
  "url": "s_graphalgorithms_digraphs.html#s_graphalgorithms_digraphs-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "digraph directed edge "
},
{
  "id": "fig_graphalgorithms_digraph",
  "level": "2",
  "url": "s_graphalgorithms_digraphs.html#fig_graphalgorithms_digraph",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": " A Digraph   "
},
{
  "id": "s_graphalgorithms_digraphs-5",
  "level": "2",
  "url": "s_graphalgorithms_digraphs.html#s_graphalgorithms_digraphs-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "directed path directed cycle "
},
{
  "id": "s_graphalgorithms_shortest-paths",
  "level": "1",
  "url": "s_graphalgorithms_shortest-paths.html",
  "type": "Section",
  "number": "3.4",
  "title": "Dijkstra’s Algorithm for Shortest Paths",
  "body": " Dijkstra's Algorithm for Shortest Paths   Just as with graphs, it is useful to assign weights to the directed edges of a digraph. Specifically, in this section we consider a pair where is a digraph and is a function assigning to each directed edge a non-negative weight . However, in this section, we interpret weight as distance distance so that is now called the length length of the edge . If is a directed path from to , then the length of the path is just the sum of the lengths of the edges in the path, . The distance from to is then defined to be the minimum length of a directed path from to . Our goal in this section is to solve the following natural problem, which has many applications:    For each vertex , find the distance from to . Also, find a shortest path from to .      Description of the Algorithm  To describe Dijkstra's algorithm in a compact manner, it is useful to extend the definition of the function . We do this by setting when and is not a directed edge of . In this way, we will treat as if it were a number (although it is not!). This is not an issue for computer implementation of the algorithm, as instead of using , a value given by the product of the number of vertices and the maximum edge weight may be used to simulate infinity.   We are now prepared to describe Dijkstra's Algorithm.   Dijkstra's Algorithm  Dijkstra's algorithm  graph shortest path in   Let . At Step , where , we will have determined:  A sequence of distinct vertices from with . These vertices are called permanent vertices , while the remaining vertices will be called temporary vertices .  For each vertex , we will have determined a number and a path from to of length .     Initialization (Step 1)  Set . Set and let be the trivial one-point path. Also, set . For each , set and . Let be a temporary vertex for which is minimum. Set , and update by appending to the end of it. Increment .    Inductive Step (Step , )  If , then for each temporary , let If this assignment results in a reduction in the value of , let be the path obtained by adding to the end of .  Let be a temporary vertex for which is minimum. Set , and update by appending to it. Increment .         Example of Dijkstra's Algorithm  Before establishing why Dijkstra's algorithm works, it may be helpful to see an example of how it works. To do this, consider the digraph shown in . For visual clarity, we have chosen a digraph which is an oriented graph , , for each distinct pair of vertices, the graph contains at most one of the two possible directed edges and .   A digraph with edge lengths    Suppose that the root vertex is the vertex labeled . The initialization step of Dijkstra's algorithm then results in the following values for and :   Step 1. Initialization     Before finishing Step 1, the algorithm identifies vertex as closest to and appends it to , making permanent. When entering Step 2, Dijkstra's algorithm attempts to find shorter paths from to each of the temporary vertices by going through . We call this process scanning from vertex . In this scan, the path to vertex is updated, since .    Step 2. Scan from vertex     Before proceeding to the next step, vertex is made permanent by making it . In Step 3, therefore, the scan is from vertex . Vertices , , and have their paths updated. However, although , we do not change since is not decreased by routing through .    Step 3. Scan from vertex     Now vertex is made permanent.    Step 4. Scan from vertex     Now vertex is made permanent.    Step 5. Scan from vertex     Now vertex is made permanent.    Step 6. Scan from vertex     Now vertex is made permanent.    Step 7. Scan from vertex     Now vertex is made permanent. Since this is the last vertex, the algorithm halts and returns the following:    Final Results of Dijkstra's Algorithm        The Correctness of Dijkstra's Algorithm  Now that we've illustrated Dijkstra's algorithm, it's time to prove that it actually does what we claimed it does: find the distance from the root vertex to each of the other vertices and a path of that length. To do this, we first state two elementary propositions. The first is about shortest paths in general, while the second is specific to the sequence of permanent vertices produced by Dijkstra's algorithm.    Let be a vertex and let be a shortest path from to . Then for every integer with , is a shortest path from to and is a shortest path from to       When the algorithm halts, let . Then     We are now ready to prove the correctness of the algorithm. The proof we give will be inductive, but the induction will have nothing to do with the total number of vertices in the digraph or the step number the algorithm is in.    Dijkstra's algorithm yields shortest paths for every vertex in . That is, when Dijkstra's algorithm terminates, for each , the value is the distance from to and is a shortest path from to .    The theorem holds trivially when . So we consider the case where . We argue that is the distance from to and that is a shortest path from to by induction on the minimum number of edges in a shortest path from to . When , the edge is a shortest path from to . Since , we will set and at Step 1.  Now fix a positive integer . Assume that if the minimum number of edges in a shortest path from to is at most , then is the distance from to and is a shortest path from to . Let be a vertex for which the minimum number of edges in a shortest path from to is . Fix a shortest path from to . Then is a shortest path from to . (See .)   Shortest paths      By the inductive hypothesis, is the distance from to , and is a shortest path from to . Note that need not be the same as path , as we suggest in . However, if distinct, the two paths will have the same length, namely . Also, the distance from to is since is a shortest path from to and .  Let and be the unique integers for which and . If , then Therefore the algorithm has found a path from to having length which is at most the distance from to . Clearly, this implies that is the distance from to and that is a shortest path.  On the other hand, if , then the inductive step at Step results in As before, this implies that is the distance from to and that is a shortest path.     "
},
{
  "id": "s_graphalgorithms_shortest-paths-2-1",
  "level": "2",
  "url": "s_graphalgorithms_shortest-paths.html#s_graphalgorithms_shortest-paths-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "distance length length distance "
},
{
  "id": "s_graphalgorithms_shortest-paths-2-2",
  "level": "2",
  "url": "s_graphalgorithms_shortest-paths.html#s_graphalgorithms_shortest-paths-2-2",
  "type": "Problem",
  "number": "3.4.1",
  "title": "",
  "body": "  For each vertex , find the distance from to . Also, find a shortest path from to .   "
},
{
  "id": "s_graphalgorithms_shortest-paths-3-2",
  "level": "2",
  "url": "s_graphalgorithms_shortest-paths.html#s_graphalgorithms_shortest-paths-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dijkstra's algorithm "
},
{
  "id": "alg_dijkstra",
  "level": "2",
  "url": "s_graphalgorithms_shortest-paths.html#alg_dijkstra",
  "type": "Algorithm",
  "number": "3.4.2",
  "title": "Dijkstra’s Algorithm.",
  "body": " Dijkstra's Algorithm  Dijkstra's algorithm  graph shortest path in   Let . At Step , where , we will have determined:  A sequence of distinct vertices from with . These vertices are called permanent vertices , while the remaining vertices will be called temporary vertices .  For each vertex , we will have determined a number and a path from to of length .     Initialization (Step 1)  Set . Set and let be the trivial one-point path. Also, set . For each , set and . Let be a temporary vertex for which is minimum. Set , and update by appending to the end of it. Increment .    Inductive Step (Step , )  If , then for each temporary , let If this assignment results in a reduction in the value of , let be the path obtained by adding to the end of .  Let be a temporary vertex for which is minimum. Set , and update by appending to it. Increment .      "
},
{
  "id": "s_graphalgorithms_shortest-paths-4-2",
  "level": "2",
  "url": "s_graphalgorithms_shortest-paths.html#s_graphalgorithms_shortest-paths-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "oriented graph "
},
{
  "id": "fig_graphalgorithms_dijkstragraph",
  "level": "2",
  "url": "s_graphalgorithms_shortest-paths.html#fig_graphalgorithms_dijkstragraph",
  "type": "Figure",
  "number": "3.4.3",
  "title": "",
  "body": " A digraph with edge lengths   "
},
{
  "id": "s_graphalgorithms_shortest-paths-5-3",
  "level": "2",
  "url": "s_graphalgorithms_shortest-paths.html#s_graphalgorithms_shortest-paths-5-3",
  "type": "Proposition",
  "number": "3.4.4",
  "title": "",
  "body": "  Let be a vertex and let be a shortest path from to . Then for every integer with , is a shortest path from to and is a shortest path from to    "
},
{
  "id": "s_graphalgorithms_shortest-paths-5-4",
  "level": "2",
  "url": "s_graphalgorithms_shortest-paths.html#s_graphalgorithms_shortest-paths-5-4",
  "type": "Proposition",
  "number": "3.4.5",
  "title": "",
  "body": "  When the algorithm halts, let . Then    "
},
{
  "id": "s_graphalgorithms_shortest-paths-5-6",
  "level": "2",
  "url": "s_graphalgorithms_shortest-paths.html#s_graphalgorithms_shortest-paths-5-6",
  "type": "Theorem",
  "number": "3.4.6",
  "title": "",
  "body": "  Dijkstra's algorithm yields shortest paths for every vertex in . That is, when Dijkstra's algorithm terminates, for each , the value is the distance from to and is a shortest path from to .    The theorem holds trivially when . So we consider the case where . We argue that is the distance from to and that is a shortest path from to by induction on the minimum number of edges in a shortest path from to . When , the edge is a shortest path from to . Since , we will set and at Step 1.  Now fix a positive integer . Assume that if the minimum number of edges in a shortest path from to is at most , then is the distance from to and is a shortest path from to . Let be a vertex for which the minimum number of edges in a shortest path from to is . Fix a shortest path from to . Then is a shortest path from to . (See .)   Shortest paths      By the inductive hypothesis, is the distance from to , and is a shortest path from to . Note that need not be the same as path , as we suggest in . However, if distinct, the two paths will have the same length, namely . Also, the distance from to is since is a shortest path from to and .  Let and be the unique integers for which and . If , then Therefore the algorithm has found a path from to having length which is at most the distance from to . Clearly, this implies that is the distance from to and that is a shortest path.  On the other hand, if , then the inductive step at Step results in As before, this implies that is the distance from to and that is a shortest path.   "
},
{
  "id": "s_graphalgorithms_longest-paths",
  "level": "1",
  "url": "s_graphalgorithms_longest-paths.html",
  "type": "Section",
  "number": "3.5",
  "title": "Algorithm for Longest Paths",
  "body": " Algorithm for Longest Paths  To complement Dijkstra's algorithm for finding the short path, in this section we give an algorithm for finding the longest path between two vertices in a directed graph.  It is not immediately clear why we might want to do this, so first in we give a motivational problem: scheduling work on a complicated project. The algorithm we present will only work on acyclic directed graphs, so in we define these, explain why this isn't a restriction for our intended application, and give the first step of the algorithm: \"topologically sorting\" the vertices of an acyclic directed graph. Finally, in we explain the actual algorithm.    The main application of the longest path algorithm is in scheduling. Suppose we have a large project -- say, building a house -- that is composed of many smaller projects: digging the foundation, building the walls, connecting to gas, electricity, and water, building the roof, doing the interiors, landscaping, etc.  Some of these activities will require others to be done before them (you can't put the roof on before you've built the walls; you don't want to do the landscaping before you've dug your water lines), while others could be done at the same time (finishing the interiors and doing the landscaping). Each sub-job has an expected amount of time required to finish it; you'd like to know before hand how long the whole task will take, and when the various sub-jobs should be done so you can arrange the contractors.  From a series of jobs like this, we will construct a weighted, directed, acyclic graph. The edges will be the sub-jobs. The weights of each edge will be the expected length of time that job has. The structure of the graph will encode the dependencies of the subjobs on each other -- an edge will flow into an edge if the job immediately depends about the job .  We will work out the construction of this graph in one example. It is not always trivial to construct the directed graph from the table of jobs and dependencies. It is not clear what the vertices should be, and sometimes dummy edges and vertices need to be encoded. You do not need to worry about constructing these graphs in general, though if you're curious it can be interesting to think about. Any exam question about this topic would supply you with the directed graph.  Our running example  Consider the following table, listing tasks , the expected time of completion for each task, and the required tasks before a given task can be started.   Table showing the prerequisites for each task.    Task  Time  Prerequisites    A  6      B  7      C  4  A    D  3  A    E  4  B,D    F  10  C    G  3  C    H  10  E,G     Here is the corresponding graph encoding this information:   We outline how the graph above was constructed. We make one vertex for the start, one vertex for the finish, and then another vertex for each set of dependencies, that is, the entries in the third column. Then we draw an edge for each letter, beginning at the vertex corresponding to its set of prerequisites (or the start, if it has none), and ending at the vertex that contains it as a prerequisite (or the end, if no tasks require it as a prerequisite).  Note that this method works only if any two sets of prerequisites either have nontrivial intersection or are identical. The tricky cases you don't have to worry about are when this isn't true.   With that detour out of the way, we see why finding the longest path in a directed acyclic graph is useful: in case the edges are tasks and the weights are expected times, the length of the longest path is the minimal time the whole project would be able to be completed.  Moreover, it is useful to actually know what the longest paths are -- to achieve this minimal time, each task in the longest path must be completed in the expected amount of time, and the next task in the path must be started immediately when the first one finishes. For this reason, the longest paths are known as critical paths .    Longest Path Algorithm  We now describe an algorithm for finding the longest paths from a starting vertex to all other vertices. In some ways, it is similar to Dijkstra's algorithm, in that we will keep a list of \"tentative longest paths found so far\", and iteratively mark one of these to a vertex as an actual longest path, and then update our list with potentially new longest paths by combining our longest path to with the edges out of . The main difference is that the ordering this updating will happen will be chosen at the beginning -- any ordering of the vertices compatible with the directed graph structure will work. These orderings are sometimes known as a \"topological sort\".  Topolgical sort  The first step of the Longest Path Algortihm is to number\/list the vertices of the graph so that all edges flow from a lower vertex to a higher vertex. Such a listing is known as a \"compatible total ordering\" of the vertices, or a \"topological sort\" of the vertices. For such a list to exist, it is necessary for the graph to be acyclic. Otherwise, we get a \"what came first, the chicken or the egg?\" type situation. For instance, if we had a directed cycle , we couldn't choose any of to put first, as each one has an error into it from the other vertices.  In our running example graph, the vertices are already numbered in a way compatible with the edge structure, and so is already topologically sorted: is an ordering satisfying the desired properties.  It turns out that this is the only obstacle, and as long as the graph is acyclic, it will have a compatible total ordering. It is not too hard to prove this carefully using induction, and to turn the proof into a constructive algorithm into how to do it, and we invite you to do so. However, in practice for small graphs it is usually not hard to find total orderings. Start with a source (a vertex with no incoming edges, only outgoing edges), then continually look for vertices that only have incoming edges from vertices already on our list.  Finally, we should stress that the topological sort of the vertices is usually not unique. For instance, in our running example, there is no edge between 2 and 3, so instead of we could have ordered the vertices as , and it also would have been a total ordering. It won't matter which total ordering you choose -- the longest path algorithm will still work. In practice applications a valid total ordering will often be 'obvious'.  The Algorithm  Having topologically sorted the vertices, we find the longest path to each other vertex inductively, by ordering of their numbers. Suppose that we have found the longest paths to each vertex with number lower than , and we want to find the length of the longest path to vertex , which we will call .  Let be the edges that come into , let be the lengths of these edges, and let be the source vertex of . Since our edges go from lower numbered vertices to higher numbered vertices, all the are labelled with numbers lower than (i.e., lower than ), and hence by the inductive hypothesis we know the longest paths to . Let be the length of this longest path from to .  Any path to must pass through one of the , and so the length of the longest path to is the   Typically we will want to find the longest path in addition to just knowing its length, and an easy way to do this is to record the edges that achieve the maximum. Then we can find the long paths in reverse by starting from and going to any recorded vertex.   We illustrate the longest path algorithm with our example graph. Our start vertex is , and so .  Vertex 1 has only one incoming edge: , with weight 6, and so .  Vertex 2 has two incoming edges: and , and so we see that is the maximum of , and , and so .  Vertex 3 has just one incoming edge: , and so .  Vertex 4 has two incoming edges: and , and so is the maximum of and . Thus, the maximum is achieved in two different ways, and we see that there are two paths of length 13 from to -- and .  Finally, vertex has two incoming edges, and , and so is the maximum of and . There are two paths that achieve this maximum -- and .    Critical path analysis  Apart from knowing the minimum time for completion of the project, finding the longest paths is useful for analysing where to put resources. In particular, which tasks, if they run slightly over, would make the whole project run late? Which tasks, if they were able to finish slightly early, would make the whole project finish early?  To make the whole project run later, we need to increase the length of the longest path, which means we to increase the length of *any* long path. Thus, the edges that would make the whole project run over are those contained in *any* longest path -- in our graph, these are edges and .  To make the whole project finish early, we need to decrease the length of *every* longest path, and so these are the edges that are included in *every* longest path. In our graph, these are edges and .  These ideas can be developed further, to list for each task the earliest possible starting time, and the latest starting time that is possible while still finishing the whole project in the minimum amount of time.    "
},
{
  "id": "subs_graphalgorithms_longest-path-motivation-5-3",
  "level": "2",
  "url": "s_graphalgorithms_longest-paths.html#subs_graphalgorithms_longest-path-motivation-5-3",
  "type": "Table",
  "number": "3.5.1",
  "title": "Table showing the prerequisites for each task.",
  "body": " Table showing the prerequisites for each task.    Task  Time  Prerequisites    A  6      B  7      C  4  A    D  3  A    E  4  B,D    F  10  C    G  3  C    H  10  E,G    "
},
{
  "id": "subs_graphalgorithms_longest-path-algorithm-4-7",
  "level": "2",
  "url": "s_graphalgorithms_longest-paths.html#subs_graphalgorithms_longest-path-algorithm-4-7",
  "type": "Example",
  "number": "3.5.2",
  "title": "",
  "body": " We illustrate the longest path algorithm with our example graph. Our start vertex is , and so .  Vertex 1 has only one incoming edge: , with weight 6, and so .  Vertex 2 has two incoming edges: and , and so we see that is the maximum of , and , and so .  Vertex 3 has just one incoming edge: , and so .  Vertex 4 has two incoming edges: and , and so is the maximum of and . Thus, the maximum is achieved in two different ways, and we see that there are two paths of length 13 from to -- and .  Finally, vertex has two incoming edges, and , and so is the maximum of and . There are two paths that achieve this maximum -- and .  "
},
{
  "id": "s_graphalgorithms_traveling-salesperson",
  "level": "1",
  "url": "s_graphalgorithms_traveling-salesperson.html",
  "type": "Section",
  "number": "3.6",
  "title": "The Traveling Salesperson Problem",
  "body": " The Traveling Salesperson Problem   In this section we discuss the Travelling Salesperson problem. In we introduce the problem and give some explanation of why it is very hard in general. Rather than try to solve it exactly, we will resort to providing upper and lower bounds for the solution. In we discuss various methods of constructing upper bounds. In we give a method of constructing lower bounds.    Introduction to the Traveling Salesperson Problem  Let us first describe the Traveling Salesperson Problem, or TSP for short, in informal language, and then translate it into a question about graph theory.  Imagine you work for a company, travelling from city to city, trying to sell some product in each (for instance, encyclopedias). You are assigned a list of cities you need to visit, and you need to start from your home, travel from city to city visiting them all, and finally return to your home. Of course, travelling from city to city is expensive (either in terms of money, travel time, or something else), and to turn a profit your company wants you to organize the order you visit each of cities so that the total cost is as cheap as possible. This minimiziation problem is the TSP.  Translated into graph theory, the TSP can be succinctly stated as follows: given a weighted graph , find the cheapest Hamiltonian path. That is, the cheapest closed walk on that visits every vertex exactly once.  First, note that it is enough to consider the complete graph . If we are given some other weighted graph , we can add all the edges not in but make their weights much larger than any of the weights inside .  Another important point is that the problem of determining whether a given graph has a Hamiltonian cycle is a special case of the traveling salesman problem. To see this, suppose we're given a graph , and we want to determine whether it is Hamiltonian. We create a weighted , with vertices the vertices of by giving the edge a very small weight if and  are adjacent in , and a very large weight if and *are not* adjacent in . Then, any Hamiltonian path in would have cost , where as any path that uses an edge not in costs more than . So, if we make , the TSP for our weighted will have a solution with cost less than if and only if had a Hamiltonian cycle.  Since determining whether a graph is Hamiltonian is difficult (NP complete), the TSP will also be. As such, we will not discuss any algorithms for actually solving TSP. Instead, we will discuss methods for giving upper and lower bounds for the TSP.    Finding upper bounds to the TSP  Getting good upper bounds to the TSP will turns out to be difficult. However, finding not so good upper bounds will turn out to be quite easy.  For instance, any solution to the TSP will be a Hamiltonian cycle, and in particular if contains vertices, the TSP solution will contain edges. Let be the weight of the most expensive edge in .   Since the TSP asks for the cheapeast Hamiltonian cycle, taking any Hamiltonian cycle and calculating its cost will be an upper bound for the TSP. Just choosing a random Hamiltonian cycle will in general be very expensive and silly -- for instance, going from Sheffield to London to Rotherham to Edinburgh to Chesterfield to Glasgow to Nottingham to Brighton is clearly not optimal.  A greedy algorithm will give a heuristically better result: we call it the nearst neighbor algorithm . At each step, simply go to the nearest city you have not already visited. This will give good results at the beginning, but since we do not do any planning ahead, it will in general give bad results, as the following example illustrates:   The graph where nearest neighbour struggles    Consider running the Nearest Neighbor algorithm starting at . At the first step, we have a choice -- we could go to or to . Suppose we go to . After that, our choice is forced -- costs one at each step. Now, we still have to visit before returning to , which will cost us 10 to detour through. We clearly should have planned ahead and visited $$T$$ in between vertices and at a cost of 4.  Clearly the nearest neighbour algorithm is not in general very good, and better algorithms are possible. We present it first to give a quick but reasonable way to get a solution to TSP that isn't completely horrible, and second to illustrate that greedy algorithms in general will not be efficient. We briefly mention two other ways to get lower bounds.  Another, slightly better, greedy algorithm might be called nearest insertion . It inductively builds bigger and bigger closed loops one vertex at time. When there is a closed loop with k vertices and we want to add vertex to the loop, we look at each of the adjacent legs , and determine how much it would raise the cost to insert the next vertex in between those two cities (changing the path to ), being sure to also check for inserting it between and . This does much better at our example above, but can run into other problems, and involves a little more bookkeeping and arithmetic, so I won't ask you to implement it on the exam.  Another method inolves a qualitive change of view. The greedy algorithms we describe so far are only heuristics to getting a decent path. There is no guarantee that they produce an output that is in any way close to the optimal path, and indeed examples can be engineered to make them extremely bad. It would be nice to have an upper bound that was guaranteed to not be too far off the optimal solution. The Christofides algorithm does just that, by producing a Hamiltonian cycle that is guaranteed to have weight at most 3\/2 of the weight of the optimal solution. Very briefly, it does this by starting with a minimal weight spanning tree, makes a subgraph by adding edges to the tree until every vertex has even degree, taking an Eulerian circuit of that, and then removing edges to get a Hamiltonian cycle.  For nearly fifty years, Christofides algorithm was the best known guaranteed upper bound on the Travelling Salesperson problem, but in the summer 2020 of Nathan Klein, Anna Karlin and Shayan Oveis Gharan managed to modify the algorithm to give a very slight improvement, producing a cycle guaranteed to be within for some . See this Quanta article for a popular account of their work.    A lower point for TSP  To get a lower bound for TSP we have to be a little more intelligent. Suppose we had a solution to the TSP for , and that we deleted one vertex from . Deleting a vertex from a cycle gives us a path , and in particular a tree. Furthermore, visits every vertex in except for , and so it is a spanning tree of .  We can use Kruskal's algorithm (or another) to find a minimal spanning tree of , and we have that . The cycle contains just two more edges, from to two other vertices, say and . We can obtain lower bounds on the weights of the edges and by taking the weights of the lowest two edges out of , maybe and . We have   giving us a lower bound on solutions to the TSP.   "
},
{
  "id": "fig_nearestneighbourbadexample",
  "level": "2",
  "url": "s_graphalgorithms_traveling-salesperson.html#fig_nearestneighbourbadexample",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": " The graph where nearest neighbour struggles   "
},
{
  "id": "s_graphalgorithms_exercises",
  "level": "1",
  "url": "s_graphalgorithms_exercises.html",
  "type": "Exercises",
  "number": "3.7",
  "title": "Exercises",
  "body": "   For the graph in , use Kruskal's algorithm ( avoid cycles ) to find a minimum weight spanning tree. Your answer should include a complete list of the edges, indicating which edges you take for your tree and which (if any) you reject in the course of running the algorithm.   Find a minimum weight spanning tree        For the graph in , use Prim's algorithm ( build tree ) to find a minimum weight spanning tree. Your answer should list the edges selected by the algorithm in the order they were selected.      For the graph in , use Kruskal's algorithm ( avoid cycles ) to find a minimum weight spanning tree. Your answer should include a complete list of the edges, indicating which edges you take for your tree and which (if any) you reject in the course of running the algorithm.   Find a minimum weight spanning tree        For the graph in , use Prim's algorithm ( build tree ) to find a minimum weight spanning tree. Your answer should list the edges selected by the algorithm in the order they were selected.      For the graph in , use Kruskal's algorithm ( avoid cycles ) to find a minimum weight spanning tree. Your answer should include a complete list of the edges, indicating which edges you take for your tree and which (if any) you reject in the course of running the algorithm.   Find a minimum weight spanning tree        For the graph in , use Prim's algorithm ( build tree ) to find a minimum weight spanning tree. Your answer should list the edges selected by the algorithm in the order they were selected.      A new local bank is being created and will establish a headquarters , two branches and , and four ATMs , , , and . They need to build a computer network such that the headquarters, branches, and ATMs can all intercommunicate. Furthermore, they will need to be networked with the Federal Reserve Bank of Atlanta, . The costs of the feasible network connections (in units of $10,000) are listed below: The bank wishes to minimize the cost of building its network (which must allow for connection, possibly routed through other nodes, from each node to each other node), however due to the need for high-speed communication, they must pay to build the connection from to as well as the connection from to . Give a list of the connections the bank should establish in order to minimize their total cost, subject to this constraint. Be sure to explain how you selected the connections and how you know the total cost is minimized.      A disconnected weighted graph obviously has no spanning trees. However, it is possible to find a spanning forest of minimum weight in such a graph. Explain how to modify both Kruskal's algorithm and Prim's algorithm to do this.      Prove .      In the paper where Kruskal's algorithm first appeared, he considered the algorithm a route to a nicer proof that in a connected weighted graph with no two edges having the same weight, there is a unique minimum weight spanning tree. Prove this fact using Kruskal's algorithm.      Use Dijkstra's algorithm to find the distance from to each other vertex in the digraph shown in and a directed path of that length.   A directed graph        contains the length of the directed edge in the intersection of row  and column  in a digraph with vertex set . For example, . (On the other hand, .) Use this data and Dijkstra's algorithm to find the distance from to each of the other vertices and a directed path of that length from .   A digraph represented as a table of data                 0  12  8  43  79  35     93  0  18  21  60  33     17  3  0  37  50  30     85  10  91  0  17  7     28  47  39  14  0  108     31  7  29  73  20  0         Use Dijkstra's algorithm to find the distance from to each other vertex in the digraph shown in and a directed path of that length.   A directed graph        contains the length of the directed edge in the intersection of row  and column  in a digraph with vertex set . For example, . (On the other hand, .) Use this data and Dijkstra's algorithm to find the distance from to each of the other vertices and a directed path of that length from .   A digraph represented as a table of data                 0  7  17  55  83  42     14  0  13  47  27  17     37  42  0  16  93  28     10  6  8  0  4  32     84  19  42  8  0  45     36  3  76  5  17  0         Give an example of a digraph having an undirected path between each pair of vertices, but having a root vertex so that Dijkstra's algorithm cannot find a path of finite length from to some vertex .      Notice that in our discussion of Dijkstra's algorithm, we required that the edge weights be nonnegative. If the edge weights are lengths and meant to model distance, this makes perfect sense. However, in some cases, it might be reasonable to allow negative edge weights. For example, suppose that a positive weight means there is a cost to travel along the directed edge while a negative edge weight means that you make money for traveling along the directed edge. In this case, a directed path with positive total weight results in paying out to travel it, while one with negative total weight results in a profit.  Give an example to show that Dijkstra's algorithm does not always find the path of minimum total weight when negative edge weights are allowed.  Bob and Xing are considering this situation, and Bob suggests that a little modification to the algorithm should solve the problem. He says that if there are negative weights, they just have to find the smallest ( , most negative weight) and add the absolute value of that weight to every directed edge. For example, if for every directed edge , Bob is suggesting that they add to every edge weight. Xing is skeptical, and for good reason. Give an example to show why Bob's modification won't work.      "
},
{
  "id": "s_graphalgorithms_exercises-1",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-1",
  "type": "Exercise",
  "number": "3.7.1",
  "title": "",
  "body": "  For the graph in , use Kruskal's algorithm ( avoid cycles ) to find a minimum weight spanning tree. Your answer should include a complete list of the edges, indicating which edges you take for your tree and which (if any) you reject in the course of running the algorithm.   Find a minimum weight spanning tree     "
},
{
  "id": "s_graphalgorithms_exercises-2",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-2",
  "type": "Exercise",
  "number": "3.7.2",
  "title": "",
  "body": "  For the graph in , use Prim's algorithm ( build tree ) to find a minimum weight spanning tree. Your answer should list the edges selected by the algorithm in the order they were selected.   "
},
{
  "id": "s_graphalgorithms_exercises-3",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-3",
  "type": "Exercise",
  "number": "3.7.3",
  "title": "",
  "body": "  For the graph in , use Kruskal's algorithm ( avoid cycles ) to find a minimum weight spanning tree. Your answer should include a complete list of the edges, indicating which edges you take for your tree and which (if any) you reject in the course of running the algorithm.   Find a minimum weight spanning tree     "
},
{
  "id": "s_graphalgorithms_exercises-4",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-4",
  "type": "Exercise",
  "number": "3.7.4",
  "title": "",
  "body": "  For the graph in , use Prim's algorithm ( build tree ) to find a minimum weight spanning tree. Your answer should list the edges selected by the algorithm in the order they were selected.   "
},
{
  "id": "s_graphalgorithms_exercises-5",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-5",
  "type": "Exercise",
  "number": "3.7.5",
  "title": "",
  "body": "  For the graph in , use Kruskal's algorithm ( avoid cycles ) to find a minimum weight spanning tree. Your answer should include a complete list of the edges, indicating which edges you take for your tree and which (if any) you reject in the course of running the algorithm.   Find a minimum weight spanning tree     "
},
{
  "id": "s_graphalgorithms_exercises-6",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-6",
  "type": "Exercise",
  "number": "3.7.6",
  "title": "",
  "body": "  For the graph in , use Prim's algorithm ( build tree ) to find a minimum weight spanning tree. Your answer should list the edges selected by the algorithm in the order they were selected.   "
},
{
  "id": "s_graphalgorithms_exercises-7",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-7",
  "type": "Exercise",
  "number": "3.7.7",
  "title": "",
  "body": "  A new local bank is being created and will establish a headquarters , two branches and , and four ATMs , , , and . They need to build a computer network such that the headquarters, branches, and ATMs can all intercommunicate. Furthermore, they will need to be networked with the Federal Reserve Bank of Atlanta, . The costs of the feasible network connections (in units of $10,000) are listed below: The bank wishes to minimize the cost of building its network (which must allow for connection, possibly routed through other nodes, from each node to each other node), however due to the need for high-speed communication, they must pay to build the connection from to as well as the connection from to . Give a list of the connections the bank should establish in order to minimize their total cost, subject to this constraint. Be sure to explain how you selected the connections and how you know the total cost is minimized.   "
},
{
  "id": "s_graphalgorithms_exercises-8",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-8",
  "type": "Exercise",
  "number": "3.7.8",
  "title": "",
  "body": "  A disconnected weighted graph obviously has no spanning trees. However, it is possible to find a spanning forest of minimum weight in such a graph. Explain how to modify both Kruskal's algorithm and Prim's algorithm to do this.   "
},
{
  "id": "s_graphalgorithms_exercises-9",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-9",
  "type": "Exercise",
  "number": "3.7.9",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "s_graphalgorithms_exercises-10",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-10",
  "type": "Exercise",
  "number": "3.7.10",
  "title": "",
  "body": "  In the paper where Kruskal's algorithm first appeared, he considered the algorithm a route to a nicer proof that in a connected weighted graph with no two edges having the same weight, there is a unique minimum weight spanning tree. Prove this fact using Kruskal's algorithm.   "
},
{
  "id": "s_graphalgorithms_exercises-11",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-11",
  "type": "Exercise",
  "number": "3.7.11",
  "title": "",
  "body": "  Use Dijkstra's algorithm to find the distance from to each other vertex in the digraph shown in and a directed path of that length.   A directed graph     "
},
{
  "id": "s_graphalgorithms_exercises-12",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-12",
  "type": "Exercise",
  "number": "3.7.12",
  "title": "",
  "body": "  contains the length of the directed edge in the intersection of row  and column  in a digraph with vertex set . For example, . (On the other hand, .) Use this data and Dijkstra's algorithm to find the distance from to each of the other vertices and a directed path of that length from .   A digraph represented as a table of data                 0  12  8  43  79  35     93  0  18  21  60  33     17  3  0  37  50  30     85  10  91  0  17  7     28  47  39  14  0  108     31  7  29  73  20  0      "
},
{
  "id": "s_graphalgorithms_exercises-13",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-13",
  "type": "Exercise",
  "number": "3.7.13",
  "title": "",
  "body": "  Use Dijkstra's algorithm to find the distance from to each other vertex in the digraph shown in and a directed path of that length.   A directed graph     "
},
{
  "id": "s_graphalgorithms_exercises-14",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-14",
  "type": "Exercise",
  "number": "3.7.14",
  "title": "",
  "body": "  contains the length of the directed edge in the intersection of row  and column  in a digraph with vertex set . For example, . (On the other hand, .) Use this data and Dijkstra's algorithm to find the distance from to each of the other vertices and a directed path of that length from .   A digraph represented as a table of data                 0  7  17  55  83  42     14  0  13  47  27  17     37  42  0  16  93  28     10  6  8  0  4  32     84  19  42  8  0  45     36  3  76  5  17  0      "
},
{
  "id": "s_graphalgorithms_exercises-15",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-15",
  "type": "Exercise",
  "number": "3.7.15",
  "title": "",
  "body": "  Give an example of a digraph having an undirected path between each pair of vertices, but having a root vertex so that Dijkstra's algorithm cannot find a path of finite length from to some vertex .   "
},
{
  "id": "s_graphalgorithms_exercises-16",
  "level": "2",
  "url": "s_graphalgorithms_exercises.html#s_graphalgorithms_exercises-16",
  "type": "Exercise",
  "number": "3.7.16",
  "title": "",
  "body": "  Notice that in our discussion of Dijkstra's algorithm, we required that the edge weights be nonnegative. If the edge weights are lengths and meant to model distance, this makes perfect sense. However, in some cases, it might be reasonable to allow negative edge weights. For example, suppose that a positive weight means there is a cost to travel along the directed edge while a negative edge weight means that you make money for traveling along the directed edge. In this case, a directed path with positive total weight results in paying out to travel it, while one with negative total weight results in a profit.  Give an example to show that Dijkstra's algorithm does not always find the path of minimum total weight when negative edge weights are allowed.  Bob and Xing are considering this situation, and Bob suggests that a little modification to the algorithm should solve the problem. He says that if there are negative weights, they just have to find the smallest ( , most negative weight) and add the absolute value of that weight to every directed edge. For example, if for every directed edge , Bob is suggesting that they add to every edge weight. Xing is skeptical, and for good reason. Give an example to show why Bob's modification won't work.     "
},
{
  "id": "s_graphs_on_surfaces_intro",
  "level": "1",
  "url": "s_graphs_on_surfaces_intro.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction to Graphs on Surfaces",
  "body": " Introduction to Graphs on Surfaces   We begin our study of graphs on surfaces with an old chestnut of a problem, the solution of which we will develop into a more general algorithm.   The Utilities Problem  Suppose there are three houses, owned by Alice, Bob, and Carol, and they'd each like to be connected to one of three Utilities, say, gas, electricity, and water. There is no real difficulty in the real world, but if we add the restriction that we don't want any of the lines to cross over or under each other, the problem becomes quite interesting. A failed attempt at drawing a solution is shown here.   An attempt at solving the three utilities problem    Although this attempt failed, it seems very difficult to rule out that some other attempt wouldn't succeed; trying to make a case by case argument seems quite difficult to organize, and it's not clear that there are even finitely many possibilities. We need a careful way to approach the problem, which we will do in a moment, but first we will use this problem as motivation to make a few definitions.    A graph is planar if it can be drawn on a piece of paper so that no edges cross.  That definition is a bit loose -- for instance, it's left implicit, we're drawing the edges as lines, with the endpoints being the two vertices it connects. But this will be strong enough for our purposes.  With this definition in hand, the Utilities Question is asking whether the graph is planar -- treat the three utilities as red vertices, say, and the three houses as the blue vertices. This doesn't really help us organize our proof, however. To do that, we will use the basic fact that any circle drawn on the plane has an inside and an outside.  This last fact sounds absolutely trivial, but first, it is not true on other surfaces, for instance, on the torus -- in our video game world, the top of the screen makes a circle, but a point just above this circle is really at the bottom of the video game world, and so the circle doesn't cut the torus into two pieces; I also illustrated this with the Mobius band: the central line down the middle doesn't separate it into two pieces. This fact is usually stated as follows:  Jordan Curve Theorem Any simple closed plane curve has an interior and an exterior  Though easy to state, and intuitively obvious, the Jordan Curve Theorem is surprisingly subtle and difficult to prove; we won't use any more topology than this.  Before seeing it in practice, let's discuss informally how the Jordan Curve Theorem can be used to help prove whether a graph is planar or not. Suppose that we have found a large cycle as a subgraph of . Then, if we had a planar drawing of , this cycle would have to appear as a circle. By the Jordan Curve Theorem, this circle would have an inside and an outside, and every vertex and edge not in our cycle would have to be either entirely within the circle, or entirely outside the circle. This gives us a way to organize the case by case argument.  The bigger a cycle we can find, the fewer other vertices and edges we need to consider, and so we have a much cleaner case by case argument. In the best cases, the graph is Hamiltonian and the cycle includes all the vertices of , and we only have to do a case by case analysis for some the remaining edges.  Let's see how this general principle gets illustrated in practice  isn't planar   First let's name the vertices of : let the vertices be the blue circle vertices, and be the red rectangle vertices. Then the path is a Hamiltonian cycle, and so if were planar it would be drawn as a circle in the plane, as shown below:  The Hamiltonian cycle in    This contains 6 of the 9 edges of ; we need to add the edges and . The edge could be drawn inside the circle or outside, suppose we draw it inside, as shown below, with the added edge dashed.  Adding inside   Then on the inside of the circle, and are on different sides of the line , and so the edge connecting them must go outside the circle. The added edge could go around the right of the circle, as shown below here:  Adding inside   or around the left, as shown here:  Adding inside   But now and are different sides of inside the circle, and on different sides of outside the circle, and so cannot be connected without making two edges cross.  If we had began by drawing outside the circle, then we would have had to draw inside the circle, and had the same problem with being able to draw the last line; as shown here:  Adding inside     "
},
{
  "id": "failed_utilities",
  "level": "2",
  "url": "s_graphs_on_surfaces_intro.html#failed_utilities",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": " An attempt at solving the three utilities problem   "
},
{
  "id": "s_graphs_on_surfaces_intro-4-1",
  "level": "2",
  "url": "s_graphs_on_surfaces_intro.html#s_graphs_on_surfaces_intro-4-1",
  "type": "Definition",
  "number": "4.1.2",
  "title": "",
  "body": "A graph is planar if it can be drawn on a piece of paper so that no edges cross. "
},
{
  "id": "s_graphs_on_surfaces_intro-4-5",
  "level": "2",
  "url": "s_graphs_on_surfaces_intro.html#s_graphs_on_surfaces_intro-4-5",
  "type": "Theorem",
  "number": "4.1.3",
  "title": "Jordan Curve Theorem.",
  "body": "Jordan Curve Theorem Any simple closed plane curve has an interior and an exterior "
},
{
  "id": "s_graphs_on_surfaces_intro-4-10",
  "level": "2",
  "url": "s_graphs_on_surfaces_intro.html#s_graphs_on_surfaces_intro-4-10",
  "type": "Theorem",
  "number": "4.1.4",
  "title": "",
  "body": "isn't planar   First let's name the vertices of : let the vertices be the blue circle vertices, and be the red rectangle vertices. Then the path is a Hamiltonian cycle, and so if were planar it would be drawn as a circle in the plane, as shown below:  The Hamiltonian cycle in    This contains 6 of the 9 edges of ; we need to add the edges and . The edge could be drawn inside the circle or outside, suppose we draw it inside, as shown below, with the added edge dashed.  Adding inside   Then on the inside of the circle, and are on different sides of the line , and so the edge connecting them must go outside the circle. The added edge could go around the right of the circle, as shown below here:  Adding inside   or around the left, as shown here:  Adding inside   But now and are different sides of inside the circle, and on different sides of outside the circle, and so cannot be connected without making two edges cross.  If we had began by drawing outside the circle, then we would have had to draw inside the circle, and had the same problem with being able to draw the last line; as shown here:  Adding inside   "
},
{
  "id": "s_graphs_on_surfaces_planarity_algorithm",
  "level": "1",
  "url": "s_graphs_on_surfaces_planarity_algorithm.html",
  "type": "Section",
  "number": "4.2",
  "title": "The planarity algorithm for Hamiltonian graphs",
  "body": " The planarity algorithm for Hamiltonian graphs   In the previous chapter we showed that isn't planar; in this section we investigate how the ideas we used to solve the utilities problem for -- namely, the Jordan Curve theorem and the fact that is Hamiltonian -- generalize to other graphs. In the end, this will culminate in \"The Planarity Algorithm for Hamiltonian Graphs\".    Stereographic Projection and Unnecessary cases  It will make our life easier if before we investigate other graphs we streamline our proof for slightly: there were a few times where we had to treat different cases that wound up behaving essentially the same, and we'd like to see that we didn't actually need to treat them as separate cases. In particular, we would like to show that the following three seemingly different ways to connect the first two vertices lead to the same analysis:  Connecting them inside the Hamiltonian cycle  Connecting them outside \"to the left\"  Connecting them outside \"to the right\"    The three cases   The solution will be to think about drawing the graphs on the sphere instead of the plane. First, let's see why this solves our problem. On the plane, the inside of a circle is different from the outside of a circle -- the inside is bounded, but the outside is unbounded. However, on the sphere, the two sides of a circle are equivalent -- you can deform any circle to be an equator, and then the northern hemisphere is equivalent to the southern hemisphere. This shows on there sphere, the inside and the outside aren't really different cases.  Furthermore, going around the outside to \"the left\" or \"to the right\" are equivalent on the sphere -- you can slowly make the path around the sphere bigger and bigger, and then slip it around the north or south pole, and back. Alternatively, we've already seen that the inside of the circle is equivalent to the outside of the circle on the sphere , and on the inside of the circle it doesn't matter exactly how the two points are connected, and so it shouldn't matter on the outside, either.  So we've argued that if we're trying to draw a graph on the sphere, all three cases are the same, but it should still feel like a bait-and-switch: we weren't trying to draw graphs on there sphere, we were trying to draw graphs on the plane. The connection comes from the fact that the sphere can be viewed as a plane with one additional point.  Let be any point. Then .   One way to visualize this is imagine the sphere as being made from very flexible clay. If we poke a small hole in the top of the sphere, we could stick our fingers in and make the hole larger, and gradually stretch and bend and reform for the sphere to be a flat disk, which could be stretched to be the whole plane, in the same way the tangent function maps the interval to the whole real line   Alternatively, one could use stereographic projection , as shown in Figure . Draw in as the unit sphere at the origin, and let be the north pole of the sphere. Stereographic projection gives a bijection between (the sphere minus the north pole) to the plane, as follows: for any point the line through and must meet the -plane at one point. On the other hand, any line through and a point on the -plane must meet the sphere at one other point.   Stereographic Projection    Accepting that is minus one point, we see that we can draw a given graph on if and only if we can draw on : if we draw it on , we can view the as a small patch of . And if we have a drawing on , there must be at least one point on that isn't in the drawing of , and doing stereographic projection from that point gives a drawing of on the plane .     The planarity algorithm  The preceeding discussion may have felt heavy going, but the upshot is that the cases that seemed \"the same\" in our analysis of actually are the same, and similar cases will be the same for any graph. This will make it much easier to extend our reasoning to more complicated graphs.  Suppose that is Hamiltonian, and choose a Hamiltonian cycle; if were planar than this cycle must be drawn as a circle, and every other edge must either lie entirely inside or entirely outside the graph. Now consider two edges and that are not part of the cycle. Depending on the order that and appear as you go around the Hamiltonian cycle, one of two things will happen: If the vertices of and do not interlace (e.g. ), or if they share a vertex (e.g., ), then may be drawn both inside or both outside the circle without crossing  If the vertices of and do interlace (e.g. ) then if and are drawn both inside or both outside the circle, they must cross  This motivates the following definition  Cross( )  Let be a Hamiltonian graph, and a Hamiltonian cycle in . The crossing graph of and , denoted Cross( ) has as vertices the edges of that aren't in the cycle, and an edge between vertices and if the vertices of the corresponding edges interleave -- that is, and are adjacent if they cannot be drawn on the same side of the cycle without crossing.  The planarity algorithm for complete graphs Suppose that is Hamiltonian, and is a Hamiltonian cycle. Then is planar if and only if Cross( ) is bipartite.  The idea is that if is planar, the vertices of Cross( ) are naturally bicolored, with the red vertices, say, corresponding to the edges that are drawn inside the cycle , and the blue edge corresponding to the edges that are drawn outside the cycle . The definition of the edges of Cross( ) guarantees there are no edges between vertices of the same color.  Similarly, if we can find a colouring of the vertices of Cross( ) so that adjacent vertices have different colours, then we can draw all the edges of corresponding to red vertices of Cross( ) inside (or outside) without having any of them cross.  The complete graph isn't planar  Let's apply the planarity algorithm to the complete graph . Let's label the vertices 1-5, and take our Hamiltonian cycle to be 123451, which we've drawn as the outside pentagon in the following figure: The graph ( )  Since has vertices, there are 5 edges that aren't used in , namely 13,14, 24,25, and 35. So Cross( ) will consist of these five vertices. We see that 13 will be adjacent to 24 and 25, since these edges would cross if drawn inside, but 13 is not adjacent to 14 or 35, since these edges would cross 13 if drawn on the same side of the circle, as illustrated in the next figure  The edges 13 does and does not cross   Similar consideration with the other edges show that Cross( ) is the following graph, which is isomorphic to a five cycle:  The graph Cross( )   In particular, Cross( ) is not bipartite. Hence, by the planarity algorithm for Hamiltonian graphs, we see that is not planar.  A planar graph  Let's use the planarity algorithm for Hamiltonian graphs to find a planar drawing of the graph shown in the next figure.  A graph   We see that is Hamiltonian and take as our Hamiltonian cycle the path around the outside, namely . There are then six edges not contained in the Hamiltonian cycle, and we find that Cross( ) is as follows:  The graph Cross(   For instance, in the edge crosses the three edges and , and so in Cross( ), the vertex is adjacent to these vertices.  The graph Cross( has no odd cycles and hence is bipartite -- for instance, we may color and red, and the other three vertices blue. Then, to draw in the plane without edges crossing, we draw the red edges inside the cycle, and the blue edges outside the cycle:  The graph drawn without edges crossing     "
},
{
  "id": "fig_inside_outside",
  "level": "2",
  "url": "s_graphs_on_surfaces_planarity_algorithm.html#fig_inside_outside",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": "The three cases  "
},
{
  "id": "s_graphs_on_surfaces_planarity_algorithm-3-7",
  "level": "2",
  "url": "s_graphs_on_surfaces_planarity_algorithm.html#s_graphs_on_surfaces_planarity_algorithm-3-7",
  "type": "Proposition",
  "number": "4.2.2",
  "title": "",
  "body": "Let be any point. Then .   One way to visualize this is imagine the sphere as being made from very flexible clay. If we poke a small hole in the top of the sphere, we could stick our fingers in and make the hole larger, and gradually stretch and bend and reform for the sphere to be a flat disk, which could be stretched to be the whole plane, in the same way the tangent function maps the interval to the whole real line   Alternatively, one could use stereographic projection , as shown in Figure . Draw in as the unit sphere at the origin, and let be the north pole of the sphere. Stereographic projection gives a bijection between (the sphere minus the north pole) to the plane, as follows: for any point the line through and must meet the -plane at one point. On the other hand, any line through and a point on the -plane must meet the sphere at one other point.   Stereographic Projection    Accepting that is minus one point, we see that we can draw a given graph on if and only if we can draw on : if we draw it on , we can view the as a small patch of . And if we have a drawing on , there must be at least one point on that isn't in the drawing of , and doing stereographic projection from that point gives a drawing of on the plane .   "
},
{
  "id": "s_graphs_on_surfaces_planarity_algorithm-4-5",
  "level": "2",
  "url": "s_graphs_on_surfaces_planarity_algorithm.html#s_graphs_on_surfaces_planarity_algorithm-4-5",
  "type": "Definition",
  "number": "4.2.4",
  "title": "Cross(<span class=\"process-math\">\\(G,C\\)<\/span>).",
  "body": "Cross( )  Let be a Hamiltonian graph, and a Hamiltonian cycle in . The crossing graph of and , denoted Cross( ) has as vertices the edges of that aren't in the cycle, and an edge between vertices and if the vertices of the corresponding edges interleave -- that is, and are adjacent if they cannot be drawn on the same side of the cycle without crossing. "
},
{
  "id": "s_graphs_on_surfaces_planarity_algorithm-4-6",
  "level": "2",
  "url": "s_graphs_on_surfaces_planarity_algorithm.html#s_graphs_on_surfaces_planarity_algorithm-4-6",
  "type": "Algorithm",
  "number": "4.2.5",
  "title": "The planarity algorithm for complete graphs.",
  "body": "The planarity algorithm for complete graphs Suppose that is Hamiltonian, and is a Hamiltonian cycle. Then is planar if and only if Cross( ) is bipartite. "
},
{
  "id": "s_graphs_on_surfaces_planarity_algorithm-4-9",
  "level": "2",
  "url": "s_graphs_on_surfaces_planarity_algorithm.html#s_graphs_on_surfaces_planarity_algorithm-4-9",
  "type": "Example",
  "number": "4.2.6",
  "title": "The complete graph <span class=\"process-math\">\\(K_5\\)<\/span> isn’t planar.",
  "body": "The complete graph isn't planar  Let's apply the planarity algorithm to the complete graph . Let's label the vertices 1-5, and take our Hamiltonian cycle to be 123451, which we've drawn as the outside pentagon in the following figure: The graph ( )  Since has vertices, there are 5 edges that aren't used in , namely 13,14, 24,25, and 35. So Cross( ) will consist of these five vertices. We see that 13 will be adjacent to 24 and 25, since these edges would cross if drawn inside, but 13 is not adjacent to 14 or 35, since these edges would cross 13 if drawn on the same side of the circle, as illustrated in the next figure  The edges 13 does and does not cross   Similar consideration with the other edges show that Cross( ) is the following graph, which is isomorphic to a five cycle:  The graph Cross( )   In particular, Cross( ) is not bipartite. Hence, by the planarity algorithm for Hamiltonian graphs, we see that is not planar. "
},
{
  "id": "s_graphs_on_surfaces_planarity_algorithm-4-10",
  "level": "2",
  "url": "s_graphs_on_surfaces_planarity_algorithm.html#s_graphs_on_surfaces_planarity_algorithm-4-10",
  "type": "Example",
  "number": "4.2.10",
  "title": "A planar graph.",
  "body": "A planar graph  Let's use the planarity algorithm for Hamiltonian graphs to find a planar drawing of the graph shown in the next figure.  A graph   We see that is Hamiltonian and take as our Hamiltonian cycle the path around the outside, namely . There are then six edges not contained in the Hamiltonian cycle, and we find that Cross( ) is as follows:  The graph Cross(   For instance, in the edge crosses the three edges and , and so in Cross( ), the vertex is adjacent to these vertices.  The graph Cross( has no odd cycles and hence is bipartite -- for instance, we may color and red, and the other three vertices blue. Then, to draw in the plane without edges crossing, we draw the red edges inside the cycle, and the blue edges outside the cycle:  The graph drawn without edges crossing   "
},
{
  "id": "s_graphs_on_surfaces_Kuratowski",
  "level": "1",
  "url": "s_graphs_on_surfaces_Kuratowski.html",
  "type": "Section",
  "number": "4.3",
  "title": "Kuratowski’s Theorem",
  "body": " Kuratowski's Theorem   The planrity Algorithm for Hamiltonian graphs gives a very convenient and systematic way to determine whether a Hamiltonian graph is planar or not, and we saw that with some work it can be hacked to work for graphs that are \"almost\" Hamiltonian -- that have a cycle that go through all but one or two vertices, say.  Stretching these ideas further, the general logic of considering cycles and applying the Jordan Curve theorem to them would provide a way to prove whether an abritrary graph is planar or not, but as we have more or more vertices that aren't on our cycle to consider the arguments would get more and more complicated, and it's clear that a better method is desirable. In this section we will present, (but not completely prove) Kuratowski's theorem, which gives a method to determine whether or not an arbitrary graph is planar.    Planarity, subgraphs, and subdivisions  The idea behind Kuratowski's theorem rests on two small observations, which we illustrate in a simple example before discussing more formally.   Two nonplanar graphs    The graphs and in both look a lot like , and since is nonplanar, we might expect them to be nonplanar as well, but we need to be careful and precise in checking this. We work this out in the next example.  Two nonplanar graphs  The graph in is with a vertex and two edges added to it; put another way, is a subgraph of . If we could draw in the plane, we could just ignore this extra vertex and these two edges, and we'd have a drawing of in the plane, but we know isn't planar. So to avoid contradictions we are forced to conclude that isn't planar.  The graph looks just like , but we have added an extra vertex of degree two in the middle of one of the edges. Note that is not a subgraph of , and so we need to use slightly different reasoning than we did for showing isn't planar. But drawing is just like drawing and then adding an extra dot for the new vertex of degree two. If we could draw in the plane, we could just skip adding this extra dot, and we'd have a drawing of in the plane. Again, since we know isn't planar, we see that isn't planar, either.   We will now generalize the methods we used to show and are nonplanar and summarize them as lemmas. The reasoning we used to prove that was nonplanar doesn't need to be changed at all to prove:  If is nonplanar, and is a subgraph of , then isn't planar.  We've essentially already proved it, but we'll restate the reasoning in a different way for completeness.  When we draw a graph in the plane, we also draw all the subgraphs of in the plane. Thus, if is planar, then all of its subgraphs are planar. Our lemma is the contrapositive of this statement.    is logically equivalent to the discussion above, but it's worth restating the logic in this direction as well: if we can't draw in the plane, then we certainly can't draw in the plane without edges crossing, as if we could then we'd have a drawing of as part of our big drawing.  Complete graphs If , then is not planar by , because is a subgraph of , and we know that isn't planar.  We could also have used the fact that is a subgraph of , and is also nonplanar.   To generalize the method we used to prove is non-planar, we first make a form definition that encapsulates the idea of \"adding dots\" to the middle of edges:  Subdivision We say that is a subdivision of if is obtained from by adding some vertices of degree two in the middle of some of the edges of .  Cycles and Paths Any path graph is a subdivision of the graph consisting of two vertices with an edge between them. Any cycle graph is a subdivision of the triangle  If is a subdivision of a nonplanar graph , then is nonplanar. Suppose that was planar, and draw it in the graph. Then erase the, vertices of degree we added when we subdivided , merging the edges on either side to one. We obtain a planar drawing of , a contradiction, and so must not have been planar.   Kuratowski's Theorem  The definitions and lemma of the previous section essentially prove the \"easy\" direction of the following theorem, which will be our main tool for proving graphs aren't planar.  Kuratowski's Theorem  A graph is nonplanar if and only if has a subgraph that's a subdivision of or .   We will only prove one direction: that if has such a subgraph, then is nonplanar; the other direction is more difficult.  Suppose that is a subgraph of that is subdivision of or . Since we've proven and are nonplanar, we know is nonplanar by . Now since we is a subgraph of and we know is nonplanar, we know is nonplanar by .   Although we've only proven one direction of Kuratowski's theorem, it's the important direction -- the one that lets us prove graphs are nonplanar. The other direction would tell us information about subgraphs of a graph that we already knew was nonplanar for some other reason. Or, taking the contrapositive, it would let us prove a graph was planar by looking at all subgraphs of it and showing none of them looked like or . But this would be a lot of work and there's a much easier way to show a graph is planar: draw it in the plane! If you're asked to prove a graph is planar, you will almost always also be asked to draw it in the plane.  However, we will implicitly use the hard direction in the following way: if a graph is nonplanar, you can always use Kuratowski's theorem to prove that it's nonplanar. This is reassuring because it means our tool will always work to prove it's nonplanar, and that you aren't wasting your time looking for subgraphs that don't exist.   Applying Kuratowski's Theorem  The tricky part of using Kuratowski's theorem is actually finding the desired subgraph. We won't really discuss algorithm aspects of this; for any graph you are asked to prove non-planar, it will be possible to do so by educated trial an error. A few rules of thumb may be helpful, however. First, note that subdivision cannot increase the degree of any vertex. So, for to have a subgraph that's a subdivision of has to have at least 5 vertice with degree at least 4; if it doesn't, but we still suspect to be nonplanar, we know instead that we should be looking for a subdivision of .  Conceptually, it can be useful to think that some vertices of are going to be vertices of your or , and we're going to need to connect those. We can use the remaining vertices of as parts of subdivided edges between these, but these extra vertices can only be used in at most one such connection. Thus, these extra vertices are a limited resource we have, and a useful heuristic in looking for subgraph is to take a \"greedy\" approach, where we choose our vertices to require as few subdivisions as possible to make connections. We illustrate this idea in the next example.  The Petersen graph isn't planar   The Petersen graph, labeled    Let us use Kuratowski's Theorem to prove that the Petersen graph isn't planar; has a drawing of the Petersen graph with the vertices labeled for referece. Since the Petersen graph is regular of degree three, we know that it can't have a subgrpah that's a subdivision of , as it would need to have some vertices of degree 4 or larger.  It makes sense to attempt a greedy algorithm -- in the standard drawing of the Petersen grpah, pick the very top vertex 1 to be \"red\" and the three vertices adjacent to it to, 2, 5, and 6, to be \"blue\". We need two more red vertices. All vertices left are adjacent to exactly one blue vertex, so from a greedy point of view there is no preference for which vertex we pick to be the next blue vertex. Let us pick 9 to be another red vertex. Then it is connected directly to blue vertex 6, but we must find paths from 9 to 2 and 5. We could, for instance, take the path 9-4-3-2 to connect to 2, but that would use two vertices up while the path 9-7-2 only uses one extra vertex, and so seems better. Then we can connected 9 to 5 through vertex 4, and vertex 9 has been connected to all the blue vertices.  Now, we need to choose one more vertex to be a red vertex, and the vertices we haven't used are 3, 10, and 8. If we tried to make 3 the last red vertex we run into a problem: we need to connect vertex 3 to 3 other vertices, but one of the edges goes to vertex 4 which was one of the subdivided vertices that we can't visit again. Hence, we only have two possible paths out of 3, and will ever only be able to connect it to two blue vertices. A similar problem occurs if we try to make 10 the last red vertex -- it's adjacent to the vertex 7 used as a subdivided vertex. The remaining choice is vertex 8, which works, as shown in the following diagram.   A subdivided in the Petersen graph    The red and blue vertices of the subdivided are shown as squares\/circles, and the edges of the subdivided are colored thick -- only the dotted edges 7-10 and 3-4 of the Petersen graph are not used in the subgraph.    "
},
{
  "id": "fig-K33-subs",
  "level": "2",
  "url": "s_graphs_on_surfaces_Kuratowski.html#fig-K33-subs",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": " Two nonplanar graphs   "
},
{
  "id": "s_graphs_on_surfaces_Kuratowski-3-5",
  "level": "2",
  "url": "s_graphs_on_surfaces_Kuratowski.html#s_graphs_on_surfaces_Kuratowski-3-5",
  "type": "Example",
  "number": "4.3.2",
  "title": "Two nonplanar graphs.",
  "body": "Two nonplanar graphs  The graph in is with a vertex and two edges added to it; put another way, is a subgraph of . If we could draw in the plane, we could just ignore this extra vertex and these two edges, and we'd have a drawing of in the plane, but we know isn't planar. So to avoid contradictions we are forced to conclude that isn't planar.  The graph looks just like , but we have added an extra vertex of degree two in the middle of one of the edges. Note that is not a subgraph of , and so we need to use slightly different reasoning than we did for showing isn't planar. But drawing is just like drawing and then adding an extra dot for the new vertex of degree two. If we could draw in the plane, we could just skip adding this extra dot, and we'd have a drawing of in the plane. Again, since we know isn't planar, we see that isn't planar, either.  "
},
{
  "id": "lemma-nonplanar-subgraph",
  "level": "2",
  "url": "s_graphs_on_surfaces_Kuratowski.html#lemma-nonplanar-subgraph",
  "type": "Lemma",
  "number": "4.3.3",
  "title": "",
  "body": "If is nonplanar, and is a subgraph of , then isn't planar.  We've essentially already proved it, but we'll restate the reasoning in a different way for completeness.  When we draw a graph in the plane, we also draw all the subgraphs of in the plane. Thus, if is planar, then all of its subgraphs are planar. Our lemma is the contrapositive of this statement.   "
},
{
  "id": "s_graphs_on_surfaces_Kuratowski-3-9",
  "level": "2",
  "url": "s_graphs_on_surfaces_Kuratowski.html#s_graphs_on_surfaces_Kuratowski-3-9",
  "type": "Example",
  "number": "4.3.4",
  "title": "Complete graphs.",
  "body": "Complete graphs If , then is not planar by , because is a subgraph of , and we know that isn't planar.  We could also have used the fact that is a subgraph of , and is also nonplanar.  "
},
{
  "id": "s_graphs_on_surfaces_Kuratowski-3-11",
  "level": "2",
  "url": "s_graphs_on_surfaces_Kuratowski.html#s_graphs_on_surfaces_Kuratowski-3-11",
  "type": "Definition",
  "number": "4.3.5",
  "title": "Subdivision.",
  "body": "Subdivision We say that is a subdivision of if is obtained from by adding some vertices of degree two in the middle of some of the edges of . "
},
{
  "id": "s_graphs_on_surfaces_Kuratowski-3-12",
  "level": "2",
  "url": "s_graphs_on_surfaces_Kuratowski.html#s_graphs_on_surfaces_Kuratowski-3-12",
  "type": "Example",
  "number": "4.3.6",
  "title": "Cycles and Paths.",
  "body": "Cycles and Paths Any path graph is a subdivision of the graph consisting of two vertices with an edge between them. Any cycle graph is a subdivision of the triangle "
},
{
  "id": "lemma-nonplanar-subdivision",
  "level": "2",
  "url": "s_graphs_on_surfaces_Kuratowski.html#lemma-nonplanar-subdivision",
  "type": "Lemma",
  "number": "4.3.7",
  "title": "",
  "body": "If is a subdivision of a nonplanar graph , then is nonplanar. Suppose that was planar, and draw it in the graph. Then erase the, vertices of degree we added when we subdivided , merging the edges on either side to one. We obtain a planar drawing of , a contradiction, and so must not have been planar. "
},
{
  "id": "s_graphs_on_surfaces_Kuratowski-4-3",
  "level": "2",
  "url": "s_graphs_on_surfaces_Kuratowski.html#s_graphs_on_surfaces_Kuratowski-4-3",
  "type": "Theorem",
  "number": "4.3.8",
  "title": "Kuratowski’s Theorem.",
  "body": "Kuratowski's Theorem  A graph is nonplanar if and only if has a subgraph that's a subdivision of or .   We will only prove one direction: that if has such a subgraph, then is nonplanar; the other direction is more difficult.  Suppose that is a subgraph of that is subdivision of or . Since we've proven and are nonplanar, we know is nonplanar by . Now since we is a subgraph of and we know is nonplanar, we know is nonplanar by .  "
},
{
  "id": "s_graphs_on_surfaces_Kuratowski-5-4",
  "level": "2",
  "url": "s_graphs_on_surfaces_Kuratowski.html#s_graphs_on_surfaces_Kuratowski-5-4",
  "type": "Example",
  "number": "4.3.9",
  "title": "The Petersen graph isn’t planar.",
  "body": "The Petersen graph isn't planar   The Petersen graph, labeled    Let us use Kuratowski's Theorem to prove that the Petersen graph isn't planar; has a drawing of the Petersen graph with the vertices labeled for referece. Since the Petersen graph is regular of degree three, we know that it can't have a subgrpah that's a subdivision of , as it would need to have some vertices of degree 4 or larger.  It makes sense to attempt a greedy algorithm -- in the standard drawing of the Petersen grpah, pick the very top vertex 1 to be \"red\" and the three vertices adjacent to it to, 2, 5, and 6, to be \"blue\". We need two more red vertices. All vertices left are adjacent to exactly one blue vertex, so from a greedy point of view there is no preference for which vertex we pick to be the next blue vertex. Let us pick 9 to be another red vertex. Then it is connected directly to blue vertex 6, but we must find paths from 9 to 2 and 5. We could, for instance, take the path 9-4-3-2 to connect to 2, but that would use two vertices up while the path 9-7-2 only uses one extra vertex, and so seems better. Then we can connected 9 to 5 through vertex 4, and vertex 9 has been connected to all the blue vertices.  Now, we need to choose one more vertex to be a red vertex, and the vertices we haven't used are 3, 10, and 8. If we tried to make 3 the last red vertex we run into a problem: we need to connect vertex 3 to 3 other vertices, but one of the edges goes to vertex 4 which was one of the subdivided vertices that we can't visit again. Hence, we only have two possible paths out of 3, and will ever only be able to connect it to two blue vertices. A similar problem occurs if we try to make 10 the last red vertex -- it's adjacent to the vertex 7 used as a subdivided vertex. The remaining choice is vertex 8, which works, as shown in the following diagram.   A subdivided in the Petersen graph    The red and blue vertices of the subdivided are shown as squares\/circles, and the edges of the subdivided are colored thick -- only the dotted edges 7-10 and 3-4 of the Petersen graph are not used in the subgraph.  "
},
{
  "id": "s_graphs_on_surfaces_other_surfaces",
  "level": "1",
  "url": "s_graphs_on_surfaces_other_surfaces.html",
  "type": "Section",
  "number": "4.4",
  "title": "Drawing Graphs on Other surfaces",
  "body": " Drawing Graphs on Other surfaces  We saw, using stereographic projection, that being able to draw a graph on the sphere is the same as being able to draw the graph on the plane. In this section we will discuss drawing graphs on other surfaces -- the torus and the Möbius strip we will discuss in detail, though similar ideas work for any surface. We need a way to represent such graphs on a piece of paper, for use in a book (or on the exam, say). Much of the material from the rest of this chapter (Kuratowski's theorem, Euler's theorem) have analogues for other surfaces, but are beyond the scope of this module.  Motivation and culture: Manifolds and Surfaces  In this short subsection we are going to be slightly informal. The goal is simply to motivate this section about drawing graphs on surfaces other than the sphere, and to give a motivating problem that we will solve the next section on Euler's Theorem.  People used to think that the earth was flat, because if you can't see the whole thing, but can just look at just one little patch of it around you, it looks like a piece of . Formally, a mathematicians say \"locally homeomorphic to \" to mean that you can't tell it apart from by just looking at a small piece of it.  To compliment the familiar earth idea of the earth being round, we give a few more shocking thought-experiment examples. The first is: how do we know the earth is round? I, personally haven't been to space, haven't been all over the world. Maybe there's a giant tunnel running from the south pole to the north pole, and the earth is really a torus (the surface of a donut or a bagel).  The idea of the earth being the surface of the torus probably seems absolutely ridiculous, but it happens \"by accident\" in videogames. In old games like Pacman or Asteroids, the game takes place on one computer screen, but to keep it from having edges and corners the designers made the game \"wrap around\" -- if anything goes off the right edge of the screen, it comes back at the corresponding spot on the left edge of the screen, and similarly anything that goes off the top of the screen comes back on the bottom of the screen.  A similar model, expanded slightly, is used in many other video games, like early ones in the Final Fantasy series, use essentially the same process to model the surface of a planet. We claim theat any of these videogame words are actually the surface of a torus. Instead of a computer screen, let's put the world on a very flexible flat sheet. To get the left and right edges to match up, we can curl the screen up into a cylinder -- going off one edge takes us around the back of the cylinder. Now, our cylinder has two circular boundaries, coming from the top and bottom of the screen, and to get these to match up we can bend our cylinder up and glue these together to make a torus.  Finally, we can step up a dimension, we generally assume that the three dimensional space we live in is , but what evidence do we have for that? Maybe it's got some different shape, and if we could fly for untold light years in one direction we'd come back to the earth from a different direction! I can recommend Janna Levin's popular science book \/ memoir \"How the Universe got its Spots\" for an account of how physicists studied whether patterns in the cosmic microwave background radiation could have been created by the universe being a shape other than .  That discussion may feel out of place; its purpose was to motivate the following definition, which we will then apply to graph theory:  An - dimensional manifold is a space that is locally homeomorphic to . A surface is a two dimensional manifold.    Graphs on the Torus  The torus is another word for the surface of a donut. There are some graphs that can't be on drawn on the sphere, but can be drawn on a torus. But we need a way to represent drawing graphs on the torus just using a normal sheet of paper -- it would be awkward and impractical to hand every student an innertube or a donut at the exam to hand in with their papers.  We will do this by copying the videogame worlds we saw in the introduction. Draw a square to represent the videogame screen, and then draw the graph inside the square, with the added proviso that if while drawing an edge of the graph we hit the border of the square, we continue the edge at the same point of the opposite side of the square. To make clear what we're doing, it is useful to draw arrows on the edges of the square to indicate how they are being identified -- we put one arrowhead, pointing the same direction, on the left and right edges, to indicate that they are being identified, with the tip end end of one edge being marked to the tip end of the other, and the tail end being matched to the tail end of the other. We draw two arrowheads on the top and bottom edges, also pointing the same direction.  and drawn on a torus  This whole process is illustrated in , where the complete graphs on five and six vertices are drawn on the torus. We end with a few short tips and tricks for trying to draw graphs on surfaces.  The first is that it can be complicated to keep track of edges that wrap around the sides of the torus. If lots of them are wrapping around, it can be easy to lose track of which edges are connecting to which others on the opposite side. One way to make this clearer is to label the crossing point on one side letters or numbers in order, and then on the opposite side label with the letters and numbers going in the same direction as indicated by the arrow. Then you know that the edge that crosses at letter , say, on one side, picks up at on the other edge.  Another idea is to try to minimze the number of such crossings, and draw as much of the graph as possible in the center of the square, and only a few edges wrapping around the torus. One heuristic to follow is to work like we did with the planarity algorithm for Hamiltonian graphs, and try to draw a large cycle as a cycle in the square. Then, connect as many edges and extra vertices as possible through the centre of the cycle, and only when you've ruled that out try to wrap edges around the torus. This is the approach taken in the drawing of in ; the outside house is a Hamiltonian cycle, two edges could be drawn in the center of the house, and then the remaining three edges have no choice to be drawn wrapping around the torus.  The drawing of using another trick that is worth explaining. It begins with the drawing of in black, and adds new stuff in red. It appears that four new vertices have been added, one at each corner of the square. But actually, when the edges are identified, the four corners of the sphere get identified into one point on the torus. (Check this by visualizing what happens if you folded the paper up!). Placing one of the vertices on this graph on the corner can be useful because then edges drawn from this vertex will not need to wrap around the sides of the square.   Möbius strip  If you take a piece of paper and roll it up, identifying the two edges in the usual way, one obtains the cylinder. But if instead you identify the edges in the opposite way as usual, you one obtains a different surface called the Möbius strip . The Möbius strip is famous for only having one side. In the drawing shown below, if one of the ants walks all the way around the strip, when it returns to where it starts it will be on the opposite side of the strip. Similarly, whereas a cylinder has two boundary cirlces, the Möbius strip only has one.  M.C. Escher's Möbius Strip II   The fact that the Möbius strip only has one boundary circle has the following surprising consequence, that makes a great \"party trick\", is to make a Möbius strip by taping up a strip of paper, and the cut it down the very middle of the strip -- you wind up not getting two pieces of paper, but just one!  To actually represent graphs drawn on the Möbius strip, we work similarly to what we did for the torus; we draw a square, and then we draw arrows on the left and right edges to indicate that these edges are drawn together. However, we have one arrow drawn up, and one arrow drawn down, to indicate that the ends of the strip are glued together with a half twist. Since the top and bottom of the Möbius strip do not get identified together at all, we do not draw any arrows on them. Then, if an edge goes off one end the Möbius strip near the top, it comes back on the opposite end near the bottom, and vice versa.  Two drawings of on the Möbius strip    Finally, we explain some heuristics about drawing graphs on surfaces, with reference drawings of on the Möbius strip. As discussed at the end of the section of the torus, it can be useful to follow part of the reasoning used in the planarity algorithm for Hamiltonian cycles when trying to draw graphs on surfaces other than the sphere. That is, start with a large cycle in the graph -- for , with red vertices, and the blue vertices, we will use the cycle . It may be that this is cycle is drawn in the plane as a circle, as the in the left hand example; then we try to connect as many edges as possible through the centre of the circle, and then do the rest on the outside, possible wrapping around the Möbius strip.  But the Jordan Curve Theorem (that a circle has an inside and an outside) only holds for the sphere -- on other surfaces, there are always curves where this isn't true. Whether of necessity, or choice, it might be that our large cycle is drawn as one of these loops that doesn't have an inside or an outside. On the right hand side of , we have drawn the cycle as the centre of the Möbius strip.  Finally, we note that in general for a surface, there are multiple different ways to draw curves; in , we have drawn our chosen Hamiltonian cycle as a curve that wraps twice about the Möbius strip. What happens if you cut a physical Möbius strip along this line?  A third drawing of on the Möbius strip     "
},
{
  "id": "def-manifold-surface",
  "level": "2",
  "url": "s_graphs_on_surfaces_other_surfaces.html#def-manifold-surface",
  "type": "Definition",
  "number": "4.4.1",
  "title": "",
  "body": "An - dimensional manifold is a space that is locally homeomorphic to . A surface is a two dimensional manifold.  "
},
{
  "id": "fig_k5_and_k6_on_torus",
  "level": "2",
  "url": "s_graphs_on_surfaces_other_surfaces.html#fig_k5_and_k6_on_torus",
  "type": "Figure",
  "number": "4.4.2",
  "title": "",
  "body": "and drawn on a torus "
},
{
  "id": "fig-escher-mobius",
  "level": "2",
  "url": "s_graphs_on_surfaces_other_surfaces.html#fig-escher-mobius",
  "type": "Figure",
  "number": "4.4.3",
  "title": "",
  "body": "M.C. Escher's Möbius Strip II  "
},
{
  "id": "fig-K33-mobius",
  "level": "2",
  "url": "s_graphs_on_surfaces_other_surfaces.html#fig-K33-mobius",
  "type": "Figure",
  "number": "4.4.4",
  "title": "",
  "body": "Two drawings of on the Möbius strip   "
},
{
  "id": "fig-K33-mobius2",
  "level": "2",
  "url": "s_graphs_on_surfaces_other_surfaces.html#fig-K33-mobius2",
  "type": "Figure",
  "number": "4.4.5",
  "title": "",
  "body": "A third drawing of on the Möbius strip   "
},
{
  "id": "s_graphs_on_surfaces_euler",
  "level": "1",
  "url": "s_graphs_on_surfaces_euler.html",
  "type": "Section",
  "number": "4.5",
  "title": "Euler’s Theorem",
  "body": " Euler's Theorem   This section cover's Euler's theorem on planar graphs and its applications. After defining faces, we state Euler's Theorem by induction, and gave several applications of the theorem itself: more proofs that and aren't planar, that footballs have five pentagons, and a proof that our video game designers couldn't have made their map into a sphere without doing something very strange.    Counting faces A face face of a planar drawing of a graph is a region bounded by edges and vertices and not containing any other vertices or edges.  shows a planar drawing of a two graphs. The left graph has determines regions, since we also count the unbounded region that surrounds the drawing.   Two planar graphs   What happens if we compute the number of vertices minus the number of edges plus the number of faces for these drawings? We have   While it might seem like a coincidence that this computation results in for these planar drawings, there's a more general principle at work here, and in fact it holds for any planar drawing of any planar graph.  In fact, the number here actually results from a fundamental property of the plane, and there are a corresponding theorems for other surfaces. However, we only need the result as stated above.   Euler's Formula  Euler's formula   Let be a connected planar graph with vertices and edges. Every planar drawing of has faces, where satisfies     Our proof is by induction on the number of edges. If , then since is connected, our graph has a single vertex, and so there is one face. Thus as needed. Now suppose that we have proven Euler's formula for all graphs with less than edges and let have edges. Pick an edge of . What happens if we form a new graph by deleting from ? If is connected, our inductive hypothesis applies. Say that has vertices, edges, and faces. Then by induction, these numbers satisfy Since we only deleted one edge, and . What did the removal of do to the number of faces? In there's a new face that was formerly two faces divided by in . Thus, . Substituting these into , we have Thus, if is connected, we are done. If is disconnected, however, we cannot apply the inductive assumption to directly. Fortunately, since we removed only one edge, has two components, which we can view as two connected graphs and . Each of these has fewer than edges, so we may apply the inductive hypothesis to them. For , let be the number of vertices of , the number of edges of , and the number of faces of . Then by induction we have Adding these together, we have But now , and , so the equality becomes The only thing we have yet to figure out is how relates to , and we have to hope that it will allow us to knock the down to a . Every face of and is a face of , since the fact that removing disconnects means that must be part of the boundary of the unbounded face. Further, the unbounded face is counted twice in the sum , so . This gives exactly what we need to complete the proof.    Alternative method of dealing with the second case In our proof of Euler's theorem, the most complicated part was dealing with the situation if the edge disconnects our graph when we remove it. In this case, instead of deleting the edge we can contract it -- that is, shrink it to a point. This would have result in a graph that is still planar and still connected, but with one less edge ( is no longer around), and one less vertex (the two vertices connects are now merged into one). The number of faces remains unchanged. So the number of edges and the number of faces each decreased by one, these two changes cancel out when we calculate , and hence both are equal to two.   Applications of Euler's theorem  By itself, Euler's theorem doesn't seem that useful: there are three variables (the numbers of edges, vertices, and faces) and only one equation between them, so there are still lots of degrees of freedom. For it to be particularly useful, we want to have other relationships between these numbers. In many applications, these relationships can come from handshaking.  Recall that Euler's handshaking lemma said that the sum of the degrees of all the vertices is twice the number of edges. If we had some knowledge about the degrees of these vertices, we could get another relationship between the number of vertices and the number of edges. For example, if is regular of degree , then every vertex has degree , and hence the sum of all the degrees is just . Hence, handshaking would tell us that , and we would have another relationship between the three variables and .  Similarly, there is a handshaking between faces and edges. Let the degree of a face be the number of edges that occur around it -- so, a triangle would have degree three. Then, if we sum up the degrees of all the faces, we're counting each edge twice again -- once from the face on its left, and once from the face on its right. so we have Note that this is just the usual vertex-edge handshaking for the dual graph.  Thus, vertex-edge and face-edge handshaking can potentially give us two other sources of relationships between the numbers of vertices, edges, and faces. Most applications of Euler's theorem proceed by combining all three relationships, as we shall see.  isn't planar  We give a proof by contradiction. Suppose was planar, and draw it on the plane. We know that has 5 vertices and edges, and so by Euler theorem we know that any drawing of it must have 7 faces. We now use edge-face handshaking to get a contradiction.  What could the degrees of the faces be? We don't know for sure, but we know that none of the faces could have degree one or two, as then the edges would form a loop or multiple edges between two vertices, but is simple. Hence, every face must have . But then handshaking gives:   which is the desired contradiction, and so we conclude that is not, in fact, planar.   It is a good exercise to adapt this proof to prove that isn't planar; one needs to use the extra fact that doesn't have any three cycles (why not?)  We now prove that footballs have 12 pentagons. More precisely, use the shorthand football graph to mean any trivalent graph drawn on the plane so that every face is a pentagon or hexagon. Then we have:  The football theorem Let be a football grpah drawn on the plane, with pentagonal faces, and hexagonal faces. Then .  Let denote the number of vertices, edges, and faces of . Since every face is a hexagon or pentagon, we have , and substituting this into Euler's theorem gives:   Now we turn handshaking. Since is trivalent, every vertex has degree three, and so vertex-edge handshaking becomes:   Finally, since there are pentagonal faces and hexagonal faces, face-edge handshaking becomes:   Multiplying by six gives:   Multiplying by two gives , which we can use to eliminate , giving   Finally, using we can eliminate both and in one go, being left with as desired.   Finally, we prove that given some sensible restraints, video game designers cannot make a world map that's a sphere. A videogame world locally looks like a square grid -- with every vertex and face having degree four.  The videogame theorem It is impossible to draw for a graph to be drawn on the sphere so that every vertex and every face has degree 4.  Since every vertex has degree 4, vertex-edge handshaking gives , and since every face has degree 4, face-edge handshaking gives . Thus, we see , and plugging this in gives:   which contradicts Euler's Theorem. Hence, such a graph on a sphere is not possible.    "
},
{
  "id": "s_graphs_on_surfaces_euler-3-2",
  "level": "2",
  "url": "s_graphs_on_surfaces_euler.html#s_graphs_on_surfaces_euler-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "face "
},
{
  "id": "fig_planar",
  "level": "2",
  "url": "s_graphs_on_surfaces_euler.html#fig_planar",
  "type": "Figure",
  "number": "4.5.1",
  "title": "",
  "body": " Two planar graphs  "
},
{
  "id": "s_graphs_on_surfaces_euler-3-8",
  "level": "2",
  "url": "s_graphs_on_surfaces_euler.html#s_graphs_on_surfaces_euler-3-8",
  "type": "Theorem",
  "number": "4.5.2",
  "title": "Euler’s Formula.",
  "body": " Euler's Formula  Euler's formula   Let be a connected planar graph with vertices and edges. Every planar drawing of has faces, where satisfies     Our proof is by induction on the number of edges. If , then since is connected, our graph has a single vertex, and so there is one face. Thus as needed. Now suppose that we have proven Euler's formula for all graphs with less than edges and let have edges. Pick an edge of . What happens if we form a new graph by deleting from ? If is connected, our inductive hypothesis applies. Say that has vertices, edges, and faces. Then by induction, these numbers satisfy Since we only deleted one edge, and . What did the removal of do to the number of faces? In there's a new face that was formerly two faces divided by in . Thus, . Substituting these into , we have Thus, if is connected, we are done. If is disconnected, however, we cannot apply the inductive assumption to directly. Fortunately, since we removed only one edge, has two components, which we can view as two connected graphs and . Each of these has fewer than edges, so we may apply the inductive hypothesis to them. For , let be the number of vertices of , the number of edges of , and the number of faces of . Then by induction we have Adding these together, we have But now , and , so the equality becomes The only thing we have yet to figure out is how relates to , and we have to hope that it will allow us to knock the down to a . Every face of and is a face of , since the fact that removing disconnects means that must be part of the boundary of the unbounded face. Further, the unbounded face is counted twice in the sum , so . This gives exactly what we need to complete the proof.   "
},
{
  "id": "s_graphs_on_surfaces_euler-3-9",
  "level": "2",
  "url": "s_graphs_on_surfaces_euler.html#s_graphs_on_surfaces_euler-3-9",
  "type": "Remark",
  "number": "4.5.3",
  "title": "Alternative method of dealing with the second case.",
  "body": "Alternative method of dealing with the second case In our proof of Euler's theorem, the most complicated part was dealing with the situation if the edge disconnects our graph when we remove it. In this case, instead of deleting the edge we can contract it -- that is, shrink it to a point. This would have result in a graph that is still planar and still connected, but with one less edge ( is no longer around), and one less vertex (the two vertices connects are now merged into one). The number of faces remains unchanged. So the number of edges and the number of faces each decreased by one, these two changes cancel out when we calculate , and hence both are equal to two. "
},
{
  "id": "s_graphs_on_surfaces_euler-4-6",
  "level": "2",
  "url": "s_graphs_on_surfaces_euler.html#s_graphs_on_surfaces_euler-4-6",
  "type": "Lemma",
  "number": "4.5.4",
  "title": "",
  "body": "isn't planar  We give a proof by contradiction. Suppose was planar, and draw it on the plane. We know that has 5 vertices and edges, and so by Euler theorem we know that any drawing of it must have 7 faces. We now use edge-face handshaking to get a contradiction.  What could the degrees of the faces be? We don't know for sure, but we know that none of the faces could have degree one or two, as then the edges would form a loop or multiple edges between two vertices, but is simple. Hence, every face must have . But then handshaking gives:   which is the desired contradiction, and so we conclude that is not, in fact, planar.  "
},
{
  "id": "s_graphs_on_surfaces_euler-4-9",
  "level": "2",
  "url": "s_graphs_on_surfaces_euler.html#s_graphs_on_surfaces_euler-4-9",
  "type": "Theorem",
  "number": "4.5.5",
  "title": "The football theorem.",
  "body": "The football theorem Let be a football grpah drawn on the plane, with pentagonal faces, and hexagonal faces. Then .  Let denote the number of vertices, edges, and faces of . Since every face is a hexagon or pentagon, we have , and substituting this into Euler's theorem gives:   Now we turn handshaking. Since is trivalent, every vertex has degree three, and so vertex-edge handshaking becomes:   Finally, since there are pentagonal faces and hexagonal faces, face-edge handshaking becomes:   Multiplying by six gives:   Multiplying by two gives , which we can use to eliminate , giving   Finally, using we can eliminate both and in one go, being left with as desired.  "
},
{
  "id": "s_graphs_on_surfaces_euler-4-11",
  "level": "2",
  "url": "s_graphs_on_surfaces_euler.html#s_graphs_on_surfaces_euler-4-11",
  "type": "Theorem",
  "number": "4.5.6",
  "title": "The videogame theorem.",
  "body": "The videogame theorem It is impossible to draw for a graph to be drawn on the sphere so that every vertex and every face has degree 4.  Since every vertex has degree 4, vertex-edge handshaking gives , and since every face has degree 4, face-edge handshaking gives . Thus, we see , and plugging this in gives:   which contradicts Euler's Theorem. Hence, such a graph on a sphere is not possible.  "
},
{
  "id": "s_graphs_on_surfaces_exercises",
  "level": "1",
  "url": "s_graphs_on_surfaces_exercises.html",
  "type": "Exercises",
  "number": "4.6",
  "title": "Exercises",
  "body": " Show that the Petersen graph has a cycle that uses all the vertices but one. Give another proof that the Petersen graph is not planar by modifying the planarity algorithm for Hamiltonian graphs to deal with this extra vertex.  Draw and on the torus.  Use the planarity algorithm to show that the given graph is planar, and draw a plane graph isomorphic to it. Explain how you might obtain a non-planar graph by adding one extra edge, and for your non-planar graph, find a subgraph that's a subdivision of or .  A Hamiltonian graph        A Hamiltonian graph    Let be the graph shown in . Show that is not planar in two ways: using the planarity algorithm, and using Kuratowski's theorem.  Draw on the Möbius strip and on a torus without the edges crossing.   A connected plane graph has faces of degrees 3 and 10 only, and every vertex has degree at least 3. Prove that it must have fewer faces of degree 10 than of degree 3. If every vertex has degree 3, prove that the number of faces of degree 10 must be a multiple of 3 and the number of faces of degree 3 must be a multiple of 4.  As an example, how many faces of degree 3 and degree 10 does the truncated dodecahedron possess? (A truncated dodecahedron is obtained by sliving off each vertex of a dodecahedron to give a triangle.)    "
},
{
  "id": "s_graphs_on_surfaces_exercises-1",
  "level": "2",
  "url": "s_graphs_on_surfaces_exercises.html#s_graphs_on_surfaces_exercises-1",
  "type": "Exercise",
  "number": "4.6.1",
  "title": "",
  "body": "Show that the Petersen graph has a cycle that uses all the vertices but one. Give another proof that the Petersen graph is not planar by modifying the planarity algorithm for Hamiltonian graphs to deal with this extra vertex. "
},
{
  "id": "s_graphs_on_surfaces_exercises-2",
  "level": "2",
  "url": "s_graphs_on_surfaces_exercises.html#s_graphs_on_surfaces_exercises-2",
  "type": "Exercise",
  "number": "4.6.2",
  "title": "",
  "body": "Draw and on the torus. "
},
{
  "id": "s_graphs_on_surfaces_exercises-3",
  "level": "2",
  "url": "s_graphs_on_surfaces_exercises.html#s_graphs_on_surfaces_exercises-3",
  "type": "Exercise",
  "number": "4.6.3",
  "title": "",
  "body": "Use the planarity algorithm to show that the given graph is planar, and draw a plane graph isomorphic to it. Explain how you might obtain a non-planar graph by adding one extra edge, and for your non-planar graph, find a subgraph that's a subdivision of or .  A Hamiltonian graph     "
},
{
  "id": "s_graphs_on_surfaces_exercises-4",
  "level": "2",
  "url": "s_graphs_on_surfaces_exercises.html#s_graphs_on_surfaces_exercises-4",
  "type": "Exercise",
  "number": "4.6.4",
  "title": "",
  "body": "  A Hamiltonian graph    Let be the graph shown in . Show that is not planar in two ways: using the planarity algorithm, and using Kuratowski's theorem.  Draw on the Möbius strip and on a torus without the edges crossing.  "
},
{
  "id": "s_graphs_on_surfaces_exercises-5",
  "level": "2",
  "url": "s_graphs_on_surfaces_exercises.html#s_graphs_on_surfaces_exercises-5",
  "type": "Exercise",
  "number": "4.6.5",
  "title": "",
  "body": "A connected plane graph has faces of degrees 3 and 10 only, and every vertex has degree at least 3. Prove that it must have fewer faces of degree 10 than of degree 3. If every vertex has degree 3, prove that the number of faces of degree 10 must be a multiple of 3 and the number of faces of degree 3 must be a multiple of 4.  As an example, how many faces of degree 3 and degree 10 does the truncated dodecahedron possess? (A truncated dodecahedron is obtained by sliving off each vertex of a dodecahedron to give a triangle.)   "
},
{
  "id": "s_chromatic_number",
  "level": "1",
  "url": "s_chromatic_number.html",
  "type": "Section",
  "number": "5.1",
  "title": "Chromatic number",
  "body": " Chromatic number  The study of graph colourings began with the colouring of maps. Usually on a map, different regions (countries, counties, states, etc.) are visually distinguished from each other by giving each one a different colour, with the idea that adjance regions should have different colours so that boundaries can be easily seen. For instance, in this old road map of England and Wales, each county is coloured either red, yellow blue or green, and bordering counties have different colours.  A historical example of a map colouring. Image courtesy Cartography Associates under a creative commons license    Note that in the map above, only four colours are used. In 1852 Francis Guthrie suggested that for any possible map drawn on a piece of a paper, four colours would be enough. Guthrie's conjecture wasn't proven for more than a hundred years later.  Let's make Guthrie's conjecture precise and connect it to graph theory. Note that as in Example , it makes sense to work with essential the dual picture to the map; we make the regions of the map into vertices, and we put an edge between two regions if they share a vertex. Then we are lead to the following definitions.  Colourings and Chromatic number  Let be a graph. A -colouring (or sometimes vertex colouring ) of with colours is an assignment of one of colours to each of the vertices of so that adjacent vertices have different colours.  More formally, a -colouring is a function so that if than we have .  The chromatic number of a graph , written , is the least number of colours needed to colour the vertices of so that adjacent vertices are given different colours; that is, it's the least so that there exists a -colouring of .  The most basic problem you will have to complete about these is the following: given a graph , determine its chromatic number . Because the chromatic number is the least number of colours with which it is possible to colour , showing that will always require two steps:  Show that admits a colouring with colours  Show that does not admit a colouring with fewer colours.  Complete graph  What's the chromatic number of the complete graph? Since every vertex is adjacent to every other vertex, any two vertices need to have different colours, and so . But certainly if we colour every vertex a different colour, then two adjacent vertices have the same colour, and that's a valid colouring of , so . So .  Trees  Suppose that is a tree on vertices. Then has an edge, and the two vertices on this edge must be different colours, and so . On the other hand, we can colour any tree with two colours as follows: pick any vertex, and colour it blue; then pick any vertex next to it and colour it red, then we can colour the vertices next to that blue, and colour the vertices next to those red, and continuing on outwards from our starting vertex. Hence, and so .  Another way of phrasing this is that along any path we colour the vertices alternating red-blue-red-blue-red-blue. This wouldn't work for a general graph, because there may be two paths of different lengths between a pair of vertices and . But in trees because there is always exactly one path between any two vertices, and so once we colour one vertex, there's a unique way to colour all the others with two colours in this way.  Cyclic graphs As with trees, as long as the graph has at least one edge, and thus has . Can we colour with two colours?  If we could, the vertices would have to alternate red-blue-red-blue all the way around. This works if is even, but if is odd then the vertex we started with would have the same colour as the vertex we ended with, but they're adjacent. Thus, when is odd we need at least three colours to colour the graph, but it's easy to do with three colours -- we can alternate red-blue-red-blue, but make the very last vertex green, for instance.  Summarizing, we have:   In fact, as thinking about the examples of trees and cycles should show, we've already met one instance of the chromatic number -- a graph is bipartite if and only if , as follows immediately from the definition.  Another useful observation about the examples we've seen is that, since the chromatic number is the least number of colours needed to colour , to show that requires doing two things: Showing that  can be coloured with colours, and hence  Showing that  can't be coloured with colours, and hence    The Wheel graph  The wheel graph consists of an -cycle together with one additional vertex, that is connected to all vertices of the -cycle. Note that this with this convention, confusingly has vertices; other people may use a different convention where has vertices, but then it only has a vertices on the actual wheel.  Since the central vertex is connected to all other vertices, once we colour it, we can never use that colour again. But deleting that vertex we just have the -cycle, and we already know the chromatic number of that. So we have .  We write for the maxium degree of any vertex in :   We have  We need to show that we can colour any graph with colours. But we can just colour the vertices of one by one in whatever order we want. When we go to colour the th vertex , we look at the vertices adjacent to . Some of them may not be coloured yet, in which case they don't affect anything, but for each vertex adjacent to that is coloured, we can't use that colour for .  So there are most colours we have to avoid; if we have colours to choose from we can always find one that hasn't been used at a vertex adjacent to .   "
},
{
  "id": "fig_colouredmapexample",
  "level": "2",
  "url": "s_chromatic_number.html#fig_colouredmapexample",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": "A historical example of a map colouring. Image courtesy Cartography Associates under a creative commons license   "
},
{
  "id": "s_chromatic_number-6",
  "level": "2",
  "url": "s_chromatic_number.html#s_chromatic_number-6",
  "type": "Definition",
  "number": "5.1.2",
  "title": "Colourings and Chromatic number.",
  "body": "Colourings and Chromatic number  Let be a graph. A -colouring (or sometimes vertex colouring ) of with colours is an assignment of one of colours to each of the vertices of so that adjacent vertices have different colours.  More formally, a -colouring is a function so that if than we have .  The chromatic number of a graph , written , is the least number of colours needed to colour the vertices of so that adjacent vertices are given different colours; that is, it's the least so that there exists a -colouring of . "
},
{
  "id": "s_chromatic_number-9",
  "level": "2",
  "url": "s_chromatic_number.html#s_chromatic_number-9",
  "type": "Example",
  "number": "5.1.3",
  "title": "Complete graph.",
  "body": "Complete graph  What's the chromatic number of the complete graph? Since every vertex is adjacent to every other vertex, any two vertices need to have different colours, and so . But certainly if we colour every vertex a different colour, then two adjacent vertices have the same colour, and that's a valid colouring of , so . So . "
},
{
  "id": "s_chromatic_number-10",
  "level": "2",
  "url": "s_chromatic_number.html#s_chromatic_number-10",
  "type": "Example",
  "number": "5.1.4",
  "title": "Trees.",
  "body": "Trees  Suppose that is a tree on vertices. Then has an edge, and the two vertices on this edge must be different colours, and so . On the other hand, we can colour any tree with two colours as follows: pick any vertex, and colour it blue; then pick any vertex next to it and colour it red, then we can colour the vertices next to that blue, and colour the vertices next to those red, and continuing on outwards from our starting vertex. Hence, and so .  Another way of phrasing this is that along any path we colour the vertices alternating red-blue-red-blue-red-blue. This wouldn't work for a general graph, because there may be two paths of different lengths between a pair of vertices and . But in trees because there is always exactly one path between any two vertices, and so once we colour one vertex, there's a unique way to colour all the others with two colours in this way. "
},
{
  "id": "s_chromatic_number-11",
  "level": "2",
  "url": "s_chromatic_number.html#s_chromatic_number-11",
  "type": "Example",
  "number": "5.1.5",
  "title": "Cyclic graphs <span class=\"process-math\">\\(C_n\\)<\/span>.",
  "body": "Cyclic graphs As with trees, as long as the graph has at least one edge, and thus has . Can we colour with two colours?  If we could, the vertices would have to alternate red-blue-red-blue all the way around. This works if is even, but if is odd then the vertex we started with would have the same colour as the vertex we ended with, but they're adjacent. Thus, when is odd we need at least three colours to colour the graph, but it's easy to do with three colours -- we can alternate red-blue-red-blue, but make the very last vertex green, for instance.  Summarizing, we have:  "
},
{
  "id": "s_chromatic_number-14",
  "level": "2",
  "url": "s_chromatic_number.html#s_chromatic_number-14",
  "type": "Example",
  "number": "5.1.6",
  "title": "The Wheel graph.",
  "body": "The Wheel graph  The wheel graph consists of an -cycle together with one additional vertex, that is connected to all vertices of the -cycle. Note that this with this convention, confusingly has vertices; other people may use a different convention where has vertices, but then it only has a vertices on the actual wheel.  Since the central vertex is connected to all other vertices, once we colour it, we can never use that colour again. But deleting that vertex we just have the -cycle, and we already know the chromatic number of that. So we have . "
},
{
  "id": "s_chromatic_number-15",
  "level": "2",
  "url": "s_chromatic_number.html#s_chromatic_number-15",
  "type": "Definition",
  "number": "5.1.7",
  "title": "",
  "body": "We write for the maxium degree of any vertex in :  "
},
{
  "id": "s_chromatic_number-16",
  "level": "2",
  "url": "s_chromatic_number.html#s_chromatic_number-16",
  "type": "Theorem",
  "number": "5.1.8",
  "title": "",
  "body": "We have  We need to show that we can colour any graph with colours. But we can just colour the vertices of one by one in whatever order we want. When we go to colour the th vertex , we look at the vertices adjacent to . Some of them may not be coloured yet, in which case they don't affect anything, but for each vertex adjacent to that is coloured, we can't use that colour for .  So there are most colours we have to avoid; if we have colours to choose from we can always find one that hasn't been used at a vertex adjacent to .  "
},
{
  "id": "s_chromatic_index",
  "level": "1",
  "url": "s_chromatic_index.html",
  "type": "Section",
  "number": "5.2",
  "title": "Chromatic index and applications",
  "body": " Chromatic index and applications  It is a natural twist of the definition of chromatic number to try to colour the edges of a graph instead; the least number of colours needed is the called the chromatic index . After introducing this concept and giving some examples, we give some story problem type questions that boil down to finding either the chromatic number or chromatic index.  Chromatic index  The chromatic index  of a graph is the least number of colours needed to colour the edges of so that any two edges that share a vertex have different colours.  Not that as with the chromatic number, since the chromatic index is the minimum number of colours such that the edges can be coloured with adjacent edges having different colours, to show typically requires two steps:  Prove that the edges of can be coloured with colours  Prove that the edges of cannot be coloured with less than colours   The complete graph  Let's find . Picking any vertex , there are three edges incident to , and none of these edges can have the same colour (as they all meet at ). Hence, we have .  On the other hand, it is easy to colour the edges of with three colours, as seen below, and so , and hence .   The complete graph  Now, let's move on to . Again, looking at any vertex we see all the edges adjacent to that vertex must be different colours, and so we have . Let's try to colour the edges of with 4 colours.   Suppose we coloured the four edges adjacent to the top vertex blue, green, red and purple, from left to right, and now look at the bottom edge. It is adjacent to edges coloured green and red, and so must be blue or purple. By symmetry, it's equivalent to colour it either colour, so let's suppose it's blue, giving us the following picture:   Now the edge on the right is adjacent to edges coloured red, blue and purple, and so must be green. But now we have a problem -- consider the edges labeled and in the next drawing:     Both edges share vertices with edges coloured green, blue, and purple, and hence each would need to be coloured red. But they also share a vertex with each other, and so cannot both be coloured red. So we see .  On the other hand, it is easy to colour the edges of with 5 colours: colour each edge in the outside pentagon a different colour. For each edge in the outside pentagon there will be a unique edge in the inside star that does meet that edge (the one \"parallel\" to it) -- draw that edge the same colour. That results in the following colouring:     In the examples above, we found lower bounds for by considering the degrees of vertices; this argument easily adapts in general.  For any graph we have Let be a vertex of maximal degree . Then none of the edges incident to can be coloured the same colour, and so we have  It turns out that this nearly determines the chromatic index -- it can be at most one more than :  Vizing's Theorem For any graph we have The lower bound was just proved in the previous theorem. The other direction is more difficult.   We now show how determining the chromatic number and chromatic index can show up as part of story questions.  Suppose there are six friends, Alice, Bob, Charlie, Dora, Elizabeth and Frank, and there is the following graph between then:      A   X B   X C  X X D  X X E  X X X F     Here are two word problems related to :  The friends want to divide into groups, but the edges indicate people who currently annoy each other. What's the least number of groups the friends can divide into groups so that no group contains two people who annoy each other?  The friends want to hold a snooker tournament, with everyone playing three matches; the edges indicate pairs of friends who will play against each other. If multiple matches can be played each day, but each person can only be involved in one match a day, how many days are necessary to hold the tournament?   The first case concerns the chromatic number -- each group of people will be the people who have the same colour, and we don't want vertices with an edge between them to have the same colour.  The second case concerns the chromatic index -- the edges are the games that are being played, and all edges that are the same colour will be played on the same day.  Let us quickly compute the chromatic number and chromatic index of the graph above. To compute the chromatic number, we observe that the graph contains a triangle, and so the chromatic number is at least 3. But it is easy to colour the vertices with three colours -- for instance, colour A and D red, colour C and F blue, and colur E and B green. So .  To compute , since has degree three we have . On the other hand, it is easy to colour the edges with three colours -- for instance, colour AB, CE and DF red, colour AE, CD and BF blue, and colour AC, BD and EF green. So as well.  "
},
{
  "id": "s_chromatic_index-3",
  "level": "2",
  "url": "s_chromatic_index.html#s_chromatic_index-3",
  "type": "Definition",
  "number": "5.2.1",
  "title": "Chromatic index.",
  "body": "Chromatic index  The chromatic index  of a graph is the least number of colours needed to colour the edges of so that any two edges that share a vertex have different colours. "
},
{
  "id": "s_chromatic_index-6",
  "level": "2",
  "url": "s_chromatic_index.html#s_chromatic_index-6",
  "type": "Example",
  "number": "5.2.2",
  "title": "The complete graph <span class=\"process-math\">\\(K_4\\)<\/span>.",
  "body": "The complete graph  Let's find . Picking any vertex , there are three edges incident to , and none of these edges can have the same colour (as they all meet at ). Hence, we have .  On the other hand, it is easy to colour the edges of with three colours, as seen below, and so , and hence .  "
},
{
  "id": "s_chromatic_index-7",
  "level": "2",
  "url": "s_chromatic_index.html#s_chromatic_index-7",
  "type": "Example",
  "number": "5.2.3",
  "title": "The complete graph <span class=\"process-math\">\\(K_5\\)<\/span>.",
  "body": "The complete graph  Now, let's move on to . Again, looking at any vertex we see all the edges adjacent to that vertex must be different colours, and so we have . Let's try to colour the edges of with 4 colours.   Suppose we coloured the four edges adjacent to the top vertex blue, green, red and purple, from left to right, and now look at the bottom edge. It is adjacent to edges coloured green and red, and so must be blue or purple. By symmetry, it's equivalent to colour it either colour, so let's suppose it's blue, giving us the following picture:   Now the edge on the right is adjacent to edges coloured red, blue and purple, and so must be green. But now we have a problem -- consider the edges labeled and in the next drawing:     Both edges share vertices with edges coloured green, blue, and purple, and hence each would need to be coloured red. But they also share a vertex with each other, and so cannot both be coloured red. So we see .  On the other hand, it is easy to colour the edges of with 5 colours: colour each edge in the outside pentagon a different colour. For each edge in the outside pentagon there will be a unique edge in the inside star that does meet that edge (the one \"parallel\" to it) -- draw that edge the same colour. That results in the following colouring:    "
},
{
  "id": "s_chromatic_index-9",
  "level": "2",
  "url": "s_chromatic_index.html#s_chromatic_index-9",
  "type": "Theorem",
  "number": "5.2.4",
  "title": "",
  "body": "For any graph we have Let be a vertex of maximal degree . Then none of the edges incident to can be coloured the same colour, and so we have "
},
{
  "id": "s_chromatic_index-11",
  "level": "2",
  "url": "s_chromatic_index.html#s_chromatic_index-11",
  "type": "Theorem",
  "number": "5.2.5",
  "title": "Vizing’s Theorem.",
  "body": "Vizing's Theorem For any graph we have The lower bound was just proved in the previous theorem. The other direction is more difficult.  "
},
{
  "id": "s_chromatic_polynomial_intro",
  "level": "1",
  "url": "s_chromatic_polynomial_intro.html",
  "type": "Section",
  "number": "5.3",
  "title": "Introduction to the chromatic polynomial",
  "body": " Introduction to the chromatic polynomial  For the chromatic number, we were asking whether or not it was possible to colour the vertices of with a given number of colours. The chromatic polynomial extends this question, and asks the following. Suppose we have colours. How many different ways can we colour the vertices of ? It is not clear that this should be a polynomial in , and proving that it is in fact a polynomial in is the highlight of the section.  Definition and examples  The chromatic polynomial  The chromatic polynomial of a graph is the function that takes in a non-negative integer and returns the number of ways to colour the vertices of with colours so that adjacent vertices have different colours.  It is immediate from the definition of the chromatic polynomial that is the least positive number such that .  It is immediate from the definition of the chromatic polynomial that it is, in fact, a polynomial. In fact, proving that will take a little bit of work, and we postpone this until the end. First, we look at some examples of the chromatic polynomial; in many cases it is possible to easily compute the chromatic polynomial by working \"vertex by vertex\".  The empty graph Recall that the empty graph has vertices and no edges. To compute we need to count the number of ways to colour the vertices with colours. But since has no edges, we can colour each of the vertices any of the colours; the choices are completely independent. So  The complete graph Let's label the vertices , and colour them one by one in the given order. When we colour the first vertex , no other vertices have been coloured, and we can use whichever of the vertice we like. However, when we go to colour we note that it is adjacent to , and so whatever colour we used for we can't for , and so we have colours to choose for  Continuing in this way, we see that since all the vertices are adjacent, they all most have different colours. So when we go to colour , we have already coloured with different colours, and we can't use any of these to colour , and so we have choices to colour .  Putting it all together, we see that:  Two triangles joined at a vertex  Consider the graph consisting of two triangles joined at the right a vertex, shown at the right. We can calulate by working vertex by vertex: there are ways to colour vertex 1, but then when we colour vertex 2 it can't be the same as vertex 1, and so there are ways to colour it. Vertex three is adjacent to both one and two, so there are ways to colour it, and vertex 4 is adjacent to one coloured vertex, vertex 3, so there are again ways to colour it, and finally vertex 5 is adjacent to vertices 3 and 4 and so we have ways to colour it.Putting it together, we see .     Two triangles joined along an edge  Consider the graph consisting of two triangles joined along an edge. shown at the right. We can calulate by working vertex by vertex: there are ways to colour vertex 1, but then when we colour vertex 2 it can't be the same as vertex 1, and so there are ways to colour it. Vertex three is adjacent to both one and two, so there are ways to colour it, and vertex 4 is adjacent to vertices 2 and 3, which have different colours as they are adjacent to each other, so there are ways to colour it. Putting it together, we see       Gluing  What can we say about the chromatic polynomial of a graph that's the disjoint union of two smaller graphs: ?  We already covered the extreme case where is just a disjoint union of vertices; we could colour each vertex independently of the others, as there were no edges between them at all. A similar argument works in general to give the following.  Let be a disconnected graph. Then A colouring of with colours gives a colouring of with colours and a colouring of with colourings. Similarly, since are disconnected, how we colour one will have no effect on what colourings are possible for the other. Hence, colouring is exactly the same as colouring and It gets more interesting if is almost the disjoint union of two graphs, by which we mean that is the union of two subgraphs and that are nearly disjoint -- perhaps they share a single vertex, or two vertices connected by an edge. In these cases, there are nice \"gluing\" formulas relating the chromatic polynomials of and ; as grows more complicated it is still possible to say something but the answer gets more complicated and not worth it. Suppose has two subgraphs and , so that their union is all of , but their intersection is a single vertex , i.e. and . Then we have the following relation between their chromatic polynomials:    As in the proof of colourings of disjoint unions, a colouring of gives a colouring of both and by restriction, but we don't get any two colourings: both and contain , and our two colourings must both make the same colouring.  In the other direction, if we have colourings of and that have the same colour at , it is clear that we can glue them together to get a colouring of . So the question reduces to the following: given that we want vertex to have a fixed colour, how many colourings of are there that colour this colour?  The colours are completely interchangeable, however; we could just change the names of each one. Thus, it is clear that there are as many colourings of where is red as there are where is blue as there are where is any given colour. Hence, if we have colours to use, exactly of all colourings of will ahve any given colour, namely  Thus, to colour with colours, we first could first colour in one of the ways. This will give us a some fixed colour of , and we saw above that there are colourings of where has this colour, and so we have the result.   Two triangles joined at a vertex, again As an example, we revisit our previous example. For , two triangles joined at a vertex, we have . Since , we know . Thus, we have:    Suppose has two subgraphs and , so that their union is all of , but their intersection is a single vertex edge connecting two vertices and , i.e. and . Then we have the following relation between their chromatic polynomials:    The proof is extremely similar to that of the previous proposition. A colouring of gives us colourings of and , but not any two colourings: they need to match at both and at .  Now, could be any of the colours, but , being adjacent to , can't be the same colour, and so it has possibilities given a choose of colour for . Thus, there are ways to colour and , and all possibilities will occur equally often within the colourings counted by . Hence, given a colouring of , there will be ways to extendthat colouring to one of all of , giving us the result.  Two triangles joined along an edge, again As an example, we revisit our previous example. For , two triangles joined along an edge, we can apply the theorm with . Thus, we have:     Case by case analysis  The meethods of gluing and working vertex by vertex make many chromatic polynomials easy to calculate. Other graphs, however, are not amenable to our gluing theorems, and require considering several cases when working vertex by vertex.  The chromatic polynomial of the cycle    Now consider the graph , shown at right, and suppose we try to count the number of colourings of it with colours. Vertex 1 can be any of colours, and vertex 2 has possibilities -- any colour except the one used for vertex 1. Moving to vertex 4, we see it is just adjacent to 1 as well, and so has possibilities as well.  It becomes more difficult when we try to colour vertex 3. It is adjacent to vertices 2 and 4, and so cannot be the same colour as either of these. However, vertices 2 and 4 are not adjacent, and so we don't know whether they have the same colour or not. If vertices 2 and 4, have the same colour there are possibilities for vertex 3, while if vertices 2 and 4 have different colours, there are only possibilties. Thus, we must count how many possibilities are in each of these cases.  If we want vertices 2 and 4 to have the same colour, we can first colour vertex 1 in different ways, and then pick any of the remaining colours for vertices 2 and 4. Then, to complete this to a colouring of , we have to colour , which can be any of the colours that aren't the colour and are coloured. Thus, the case where and have the same colour has possibilities.  If we want vertices 2 and 4 to have different colours, then we can first colour any of colours, colour any of colours. Now, when we go to colour vertex 4 it can't be the same colour as vertex 1 since they are adjacent, and it can't be the same colour as vertex 2 by our supposition. Vertices and have different colours, and so this leaves possibilities for . Thus there are possibilities to colour vertices 1, 2 and 4 so that 2 and 4 have different colours, and then there are possibilities left for vertex 3, giving ways to colour so that vertices 2 and 4 have different colours.  Adding the two cases together, this gives:    The chromatic polynomial of   A similar case-by-case argument that we made for works for , except now we have a further case to deal with. Using the vertex labellings as shown to the right, note that Vertices 3 and 4 must have different colours. We will consider three cases: Vertices 1, 3 and 4 all have different colours, Vertex 1 has the same colour as Vertex 3, and Vertex 1 has the same colour as Vertex 4.     Case 1: 1, 3 and 4 have different colours. Then there are ways to colour vertices 1, 3, and 4, since they must all be different colours. When we go to colour vertices 2 and 5, we see that they are each adjacent to two vertices known to have different colours, and so there are ways to colour each of them. Thus in total, Case 1 contains colourings.  Case 2: 1 and 3 have the same colour. Then there are ways to choose this colour, and ways to choose a colour for vertex 2 (since 1 and 3 have the same colour), and ways to choose a colour for vertex 4. When we colour vertex 5, we know that 1 and 4 must have different colours, and so we have ways to colour vertex 5. Thus in total, Case 2 contains colourings.  By symmetry, we see that Case 3, where 1 and 4 have the same colour, is identical to Case 2. Thus, putting the three cases together, we see that:     "
},
{
  "id": "s_chromatic_polynomial_intro-3-2",
  "level": "2",
  "url": "s_chromatic_polynomial_intro.html#s_chromatic_polynomial_intro-3-2",
  "type": "Definition",
  "number": "5.3.1",
  "title": "The chromatic polynomial <span class=\"process-math\">\\(P_{\\bfG}\\)<\/span>.",
  "body": "The chromatic polynomial  The chromatic polynomial of a graph is the function that takes in a non-negative integer and returns the number of ways to colour the vertices of with colours so that adjacent vertices have different colours. "
},
{
  "id": "s_chromatic_polynomial_intro-3-5",
  "level": "2",
  "url": "s_chromatic_polynomial_intro.html#s_chromatic_polynomial_intro-3-5",
  "type": "Example",
  "number": "5.3.2",
  "title": "The empty graph <span class=\"process-math\">\\(E_n\\)<\/span>.",
  "body": "The empty graph Recall that the empty graph has vertices and no edges. To compute we need to count the number of ways to colour the vertices with colours. But since has no edges, we can colour each of the vertices any of the colours; the choices are completely independent. So "
},
{
  "id": "s_chromatic_polynomial_intro-3-6",
  "level": "2",
  "url": "s_chromatic_polynomial_intro.html#s_chromatic_polynomial_intro-3-6",
  "type": "Example",
  "number": "5.3.3",
  "title": "The complete graph <span class=\"process-math\">\\(K_n\\)<\/span>.",
  "body": "The complete graph Let's label the vertices , and colour them one by one in the given order. When we colour the first vertex , no other vertices have been coloured, and we can use whichever of the vertice we like. However, when we go to colour we note that it is adjacent to , and so whatever colour we used for we can't for , and so we have colours to choose for  Continuing in this way, we see that since all the vertices are adjacent, they all most have different colours. So when we go to colour , we have already coloured with different colours, and we can't use any of these to colour , and so we have choices to colour .  Putting it all together, we see that: "
},
{
  "id": "example_bowtie_chromatic_polynomial",
  "level": "2",
  "url": "s_chromatic_polynomial_intro.html#example_bowtie_chromatic_polynomial",
  "type": "Example",
  "number": "5.3.4",
  "title": "Two triangles joined at a vertex.",
  "body": "Two triangles joined at a vertex  Consider the graph consisting of two triangles joined at the right a vertex, shown at the right. We can calulate by working vertex by vertex: there are ways to colour vertex 1, but then when we colour vertex 2 it can't be the same as vertex 1, and so there are ways to colour it. Vertex three is adjacent to both one and two, so there are ways to colour it, and vertex 4 is adjacent to one coloured vertex, vertex 3, so there are again ways to colour it, and finally vertex 5 is adjacent to vertices 3 and 4 and so we have ways to colour it.Putting it together, we see .    "
},
{
  "id": "s_chromatic_polynomial_intro-3-8",
  "level": "2",
  "url": "s_chromatic_polynomial_intro.html#s_chromatic_polynomial_intro-3-8",
  "type": "Example",
  "number": "5.3.5",
  "title": "Two triangles joined along an edge.",
  "body": "Two triangles joined along an edge  Consider the graph consisting of two triangles joined along an edge. shown at the right. We can calulate by working vertex by vertex: there are ways to colour vertex 1, but then when we colour vertex 2 it can't be the same as vertex 1, and so there are ways to colour it. Vertex three is adjacent to both one and two, so there are ways to colour it, and vertex 4 is adjacent to vertices 2 and 3, which have different colours as they are adjacent to each other, so there are ways to colour it. Putting it together, we see     "
},
{
  "id": "s_chromatic_polynomial_intro-4-4",
  "level": "2",
  "url": "s_chromatic_polynomial_intro.html#s_chromatic_polynomial_intro-4-4",
  "type": "Proposition",
  "number": "5.3.6",
  "title": "",
  "body": "Let be a disconnected graph. Then A colouring of with colours gives a colouring of with colours and a colouring of with colourings. Similarly, since are disconnected, how we colour one will have no effect on what colourings are possible for the other. Hence, colouring is exactly the same as colouring and "
},
{
  "id": "s_chromatic_polynomial_intro-4-13",
  "level": "2",
  "url": "s_chromatic_polynomial_intro.html#s_chromatic_polynomial_intro-4-13",
  "type": "Proposition",
  "number": "5.3.7",
  "title": "",
  "body": "Suppose has two subgraphs and , so that their union is all of , but their intersection is a single vertex , i.e. and . Then we have the following relation between their chromatic polynomials:    As in the proof of colourings of disjoint unions, a colouring of gives a colouring of both and by restriction, but we don't get any two colourings: both and contain , and our two colourings must both make the same colouring.  In the other direction, if we have colourings of and that have the same colour at , it is clear that we can glue them together to get a colouring of . So the question reduces to the following: given that we want vertex to have a fixed colour, how many colourings of are there that colour this colour?  The colours are completely interchangeable, however; we could just change the names of each one. Thus, it is clear that there are as many colourings of where is red as there are where is blue as there are where is any given colour. Hence, if we have colours to use, exactly of all colourings of will ahve any given colour, namely  Thus, to colour with colours, we first could first colour in one of the ways. This will give us a some fixed colour of , and we saw above that there are colourings of where has this colour, and so we have the result.  "
},
{
  "id": "s_chromatic_polynomial_intro-4-14",
  "level": "2",
  "url": "s_chromatic_polynomial_intro.html#s_chromatic_polynomial_intro-4-14",
  "type": "Example",
  "number": "5.3.8",
  "title": "Two triangles joined at a vertex, again.",
  "body": "Two triangles joined at a vertex, again As an example, we revisit our previous example. For , two triangles joined at a vertex, we have . Since , we know . Thus, we have:   "
},
{
  "id": "s_chromatic_polynomial_intro-4-15",
  "level": "2",
  "url": "s_chromatic_polynomial_intro.html#s_chromatic_polynomial_intro-4-15",
  "type": "Proposition",
  "number": "5.3.9",
  "title": "",
  "body": "Suppose has two subgraphs and , so that their union is all of , but their intersection is a single vertex edge connecting two vertices and , i.e. and . Then we have the following relation between their chromatic polynomials:    The proof is extremely similar to that of the previous proposition. A colouring of gives us colourings of and , but not any two colourings: they need to match at both and at .  Now, could be any of the colours, but , being adjacent to , can't be the same colour, and so it has possibilities given a choose of colour for . Thus, there are ways to colour and , and all possibilities will occur equally often within the colourings counted by . Hence, given a colouring of , there will be ways to extendthat colouring to one of all of , giving us the result. "
},
{
  "id": "s_chromatic_polynomial_intro-4-16",
  "level": "2",
  "url": "s_chromatic_polynomial_intro.html#s_chromatic_polynomial_intro-4-16",
  "type": "Example",
  "number": "5.3.10",
  "title": "Two triangles joined along an edge, again.",
  "body": "Two triangles joined along an edge, again As an example, we revisit our previous example. For , two triangles joined along an edge, we can apply the theorm with . Thus, we have:   "
},
{
  "id": "s_chromatic_polynomial_intro-5-3",
  "level": "2",
  "url": "s_chromatic_polynomial_intro.html#s_chromatic_polynomial_intro-5-3",
  "type": "Example",
  "number": "5.3.11",
  "title": "The chromatic polynomial of the cycle <span class=\"process-math\">\\(C_4\\)<\/span>.",
  "body": "The chromatic polynomial of the cycle    Now consider the graph , shown at right, and suppose we try to count the number of colourings of it with colours. Vertex 1 can be any of colours, and vertex 2 has possibilities -- any colour except the one used for vertex 1. Moving to vertex 4, we see it is just adjacent to 1 as well, and so has possibilities as well.  It becomes more difficult when we try to colour vertex 3. It is adjacent to vertices 2 and 4, and so cannot be the same colour as either of these. However, vertices 2 and 4 are not adjacent, and so we don't know whether they have the same colour or not. If vertices 2 and 4, have the same colour there are possibilities for vertex 3, while if vertices 2 and 4 have different colours, there are only possibilties. Thus, we must count how many possibilities are in each of these cases.  If we want vertices 2 and 4 to have the same colour, we can first colour vertex 1 in different ways, and then pick any of the remaining colours for vertices 2 and 4. Then, to complete this to a colouring of , we have to colour , which can be any of the colours that aren't the colour and are coloured. Thus, the case where and have the same colour has possibilities.  If we want vertices 2 and 4 to have different colours, then we can first colour any of colours, colour any of colours. Now, when we go to colour vertex 4 it can't be the same colour as vertex 1 since they are adjacent, and it can't be the same colour as vertex 2 by our supposition. Vertices and have different colours, and so this leaves possibilities for . Thus there are possibilities to colour vertices 1, 2 and 4 so that 2 and 4 have different colours, and then there are possibilities left for vertex 3, giving ways to colour so that vertices 2 and 4 have different colours.  Adding the two cases together, this gives:   "
},
{
  "id": "s_chromatic_polynomial_intro-5-4",
  "level": "2",
  "url": "s_chromatic_polynomial_intro.html#s_chromatic_polynomial_intro-5-4",
  "type": "Example",
  "number": "5.3.12",
  "title": "The chromatic polynomial of <span class=\"process-math\">\\(C_5\\)<\/span>.",
  "body": "The chromatic polynomial of   A similar case-by-case argument that we made for works for , except now we have a further case to deal with. Using the vertex labellings as shown to the right, note that Vertices 3 and 4 must have different colours. We will consider three cases: Vertices 1, 3 and 4 all have different colours, Vertex 1 has the same colour as Vertex 3, and Vertex 1 has the same colour as Vertex 4.     Case 1: 1, 3 and 4 have different colours. Then there are ways to colour vertices 1, 3, and 4, since they must all be different colours. When we go to colour vertices 2 and 5, we see that they are each adjacent to two vertices known to have different colours, and so there are ways to colour each of them. Thus in total, Case 1 contains colourings.  Case 2: 1 and 3 have the same colour. Then there are ways to choose this colour, and ways to choose a colour for vertex 2 (since 1 and 3 have the same colour), and ways to choose a colour for vertex 4. When we colour vertex 5, we know that 1 and 4 must have different colours, and so we have ways to colour vertex 5. Thus in total, Case 2 contains colourings.  By symmetry, we see that Case 3, where 1 and 4 have the same colour, is identical to Case 2. Thus, putting the three cases together, we see that:   "
},
{
  "id": "s_chromatic_polynomial_more",
  "level": "1",
  "url": "s_chromatic_polynomial_more.html",
  "type": "Section",
  "number": "5.4",
  "title": "Chromatic Polynomial continued",
  "body": " Chromatic Polynomial continued  It may seem plausible that, if we consider enough cases, the case-by-case method of computing the chromatic polynomial would work for any graph, no matter how complicated. Assuming this, it would follow that the chromatic polynomial is in fact a polynomial. However, plausibility does not make a proof. In this section we complete the proof elegantly using induction, but first need to introduce the notion of deletion and contraction.   Deletion-Contraction  Deletion  Let be a graph, and let be a graph. Then we use to denote the graph with the same vertex set as , and with all the same edges, except the edge deleted.  Contraction  Let be a simple graph, and let be an edge between vertices and . Then , the graph with contracted. More precisely, is the simple graph with vertices . Two non- vertices are adjacent in if and only if they were adjacent in , and a vertex is adjacent to in if and only if it was adjacent to or in .  Formally, seems formidable, but intuitively it is not as bad as the definition looks: we are changing by making the whole edge into one vertex. This may create multiple edges if a vertex was adjacent to both and , and if so we simply remove any duplicate edges.  Deletion-Contraction Let be a simle graph, and let be any edge. Then we have:     Since and have the same vertex, it is not too difficult to compare their colourings. Any valid colouring of will give a colouring of , but not every colouring of arises this way -- in , colourings require that and , the two endpoints of , have different colours, but there is no such requirement for . So, we want to count the colourings of where have the same colour. But these are just the colourings of : given a colouring of m we can get a colouring of by giving most vertices the same colour, and giving both whatever colour was. By definition, we see that and will have the same colour in this colouring; and given any colouring of where have the same colour we can get a colouring of by colouring the colour that were.   Chromatic polynomial of , again  Let us compute a different way as an illustration of how deletion-contraction works. No matter which edge of we pick, will be the path graph , which is a tree, and hence we know has chromatic polynomial . Similarly, we have that , and we know . Hence we have:    Since and both have fewer edges than , it follows that we can repeatedly apply Deletion-Contraction to until we have no edges left at all, and hence that Deletion-Contraction can compute the chromatic polynomial of any graph. In practice, this can be quite a complicated and formidable way to compute, but in the next section we show that this method can elegantly prove the chromatic polynomial is always a polynomial, and in some cases give nice formulas for this polynomial.   Chromatic polynomial is a polynomial  We first prove that the chromatic polynomial is actually a polynomial, but iterative use of deletion-contraction.  Let be a simple graph with vertices and edges. Then is a polynomial of degree in , and moreover:    The proof follows from induction on , the number of edges, using deletion-contraction for the inductive step.  As a base case, we take . Then if has vertices it must be the empty graph . We have seen that , which indeed has the correct form needed for the theorem.  Now, for the inductive step, we assume that for any graph with edges and vertices, we have .  Now let be any graph with edges. We can assume , as the case where is the base case; this means that has at least one edge . We apply deletion-contraction to the edge .  If we delete , the resulting graph still has vertices, but it now has edges. Since this is less than , we know by the inductive hypothesis that   If we contract , the resulting graph has vertices, and we don't know exactly how many edges it has (contracting it may create multiple edges that need to be deleted), but it has at most edges, and so by the inductive hypothesis we know that   Thus, applying deletion-contraction we have:   which is what we needed to show to finish the inductive step.    We end by showing that sometimes the inductive method of iteratively using deletion-contraction can compute explicit formulas for the chromatic polynomials of an infinite family of graphs.  Chromatic polynomial of  Let be the cycle graph on vertices. Then:    We will induct on . As a base case, when , we have:   For the inductive step, we assume that the proposition holds for and want to prove that it holds for . We will compute by deletion-contraction. If we delete any edge of , we get the path graph , and we know  . If we contract any edge of , we get , and we know by the inductive hypothesis that   Plugging these into deletion-contraction gives:   as was desired.     "
},
{
  "id": "s_chromatic_polynomial_more-3-2",
  "level": "2",
  "url": "s_chromatic_polynomial_more.html#s_chromatic_polynomial_more-3-2",
  "type": "Definition",
  "number": "5.4.1",
  "title": "Deletion.",
  "body": "Deletion  Let be a graph, and let be a graph. Then we use to denote the graph with the same vertex set as , and with all the same edges, except the edge deleted. "
},
{
  "id": "def-contract",
  "level": "2",
  "url": "s_chromatic_polynomial_more.html#def-contract",
  "type": "Definition",
  "number": "5.4.2",
  "title": "Contraction.",
  "body": "Contraction  Let be a simple graph, and let be an edge between vertices and . Then , the graph with contracted. More precisely, is the simple graph with vertices . Two non- vertices are adjacent in if and only if they were adjacent in , and a vertex is adjacent to in if and only if it was adjacent to or in . "
},
{
  "id": "lem-deletion-contraction",
  "level": "2",
  "url": "s_chromatic_polynomial_more.html#lem-deletion-contraction",
  "type": "Lemma",
  "number": "5.4.3",
  "title": "Deletion-Contraction.",
  "body": "Deletion-Contraction Let be a simle graph, and let be any edge. Then we have:     Since and have the same vertex, it is not too difficult to compare their colourings. Any valid colouring of will give a colouring of , but not every colouring of arises this way -- in , colourings require that and , the two endpoints of , have different colours, but there is no such requirement for . So, we want to count the colourings of where have the same colour. But these are just the colourings of : given a colouring of m we can get a colouring of by giving most vertices the same colour, and giving both whatever colour was. By definition, we see that and will have the same colour in this colouring; and given any colouring of where have the same colour we can get a colouring of by colouring the colour that were.  "
},
{
  "id": "s_chromatic_polynomial_more-3-6",
  "level": "2",
  "url": "s_chromatic_polynomial_more.html#s_chromatic_polynomial_more-3-6",
  "type": "Example",
  "number": "5.4.4",
  "title": "Chromatic polynomial of <span class=\"process-math\">\\(C_4\\text{,}\\)<\/span> again.",
  "body": "Chromatic polynomial of , again  Let us compute a different way as an illustration of how deletion-contraction works. No matter which edge of we pick, will be the path graph , which is a tree, and hence we know has chromatic polynomial . Similarly, we have that , and we know . Hence we have:   "
},
{
  "id": "s_chromatic_polynomial_more-4-3",
  "level": "2",
  "url": "s_chromatic_polynomial_more.html#s_chromatic_polynomial_more-4-3",
  "type": "Theorem",
  "number": "5.4.5",
  "title": "",
  "body": "Let be a simple graph with vertices and edges. Then is a polynomial of degree in , and moreover:    The proof follows from induction on , the number of edges, using deletion-contraction for the inductive step.  As a base case, we take . Then if has vertices it must be the empty graph . We have seen that , which indeed has the correct form needed for the theorem.  Now, for the inductive step, we assume that for any graph with edges and vertices, we have .  Now let be any graph with edges. We can assume , as the case where is the base case; this means that has at least one edge . We apply deletion-contraction to the edge .  If we delete , the resulting graph still has vertices, but it now has edges. Since this is less than , we know by the inductive hypothesis that   If we contract , the resulting graph has vertices, and we don't know exactly how many edges it has (contracting it may create multiple edges that need to be deleted), but it has at most edges, and so by the inductive hypothesis we know that   Thus, applying deletion-contraction we have:   which is what we needed to show to finish the inductive step.   "
},
{
  "id": "s_chromatic_polynomial_more-4-5",
  "level": "2",
  "url": "s_chromatic_polynomial_more.html#s_chromatic_polynomial_more-4-5",
  "type": "Lemma",
  "number": "5.4.6",
  "title": "Chromatic polynomial of <span class=\"process-math\">\\(C_n\\)<\/span>.",
  "body": "Chromatic polynomial of  Let be the cycle graph on vertices. Then:    We will induct on . As a base case, when , we have:   For the inductive step, we assume that the proposition holds for and want to prove that it holds for . We will compute by deletion-contraction. If we delete any edge of , we get the path graph , and we know  . If we contract any edge of , we get , and we know by the inductive hypothesis that   Plugging these into deletion-contraction gives:   as was desired.   "
},
{
  "id": "s_chromatic_exercises",
  "level": "1",
  "url": "s_chromatic_exercises.html",
  "type": "Exercises",
  "number": "5.5",
  "title": "Exercises",
  "body": " Eleven football games are to be arranged among eight teams A to H as follows.   If no team can play more than once a week, what is the minimum number of weeks needed to schedule all the games? Justify your answer.   Eight students A--H each have to choose two courses from a list of eight options 1--8. They choose as follows.   You have to timetable the examinations in such a way that no student has to take two exams on the same day. What is the smallest number of days you need, and in how many ways can you fit the exams into these days? Describe one way.   Eight foods A to H are to be put in refrigerated compartments in a supermarket. Because of various regulations, some cannot share the same compartment with others, as indicated by crosses in the following table.   Determine the smallest number of compartments needed to display the foods and find a possible placing of the foods in the compartments.    For the graph shown below, find and   The graph        Find the chromatic polynomial of the following three graphs. You should use the chromatic polynomial of the four cycle as a given:        Let be any edge of . Derive the chromatic polynomial of by colouring 'vertex by vertex'. Also find the chromatic polynomial of , and then check that the deletion-contraction formula holds in this csae.  Now let be another edge of . What's the chromatic polynomial of ? Does it matter whether and share a vertex?    "
},
{
  "id": "s_chromatic_exercises-1",
  "level": "2",
  "url": "s_chromatic_exercises.html#s_chromatic_exercises-1",
  "type": "Exercise",
  "number": "5.5.1",
  "title": "",
  "body": "Eleven football games are to be arranged among eight teams A to H as follows.   If no team can play more than once a week, what is the minimum number of weeks needed to schedule all the games? Justify your answer.  "
},
{
  "id": "s_chromatic_exercises-2",
  "level": "2",
  "url": "s_chromatic_exercises.html#s_chromatic_exercises-2",
  "type": "Exercise",
  "number": "5.5.2",
  "title": "",
  "body": "Eight students A--H each have to choose two courses from a list of eight options 1--8. They choose as follows.   You have to timetable the examinations in such a way that no student has to take two exams on the same day. What is the smallest number of days you need, and in how many ways can you fit the exams into these days? Describe one way.  "
},
{
  "id": "s_chromatic_exercises-3",
  "level": "2",
  "url": "s_chromatic_exercises.html#s_chromatic_exercises-3",
  "type": "Exercise",
  "number": "5.5.3",
  "title": "",
  "body": "Eight foods A to H are to be put in refrigerated compartments in a supermarket. Because of various regulations, some cannot share the same compartment with others, as indicated by crosses in the following table.   Determine the smallest number of compartments needed to display the foods and find a possible placing of the foods in the compartments.  "
},
{
  "id": "s_chromatic_exercises-4",
  "level": "2",
  "url": "s_chromatic_exercises.html#s_chromatic_exercises-4",
  "type": "Exercise",
  "number": "5.5.4",
  "title": "",
  "body": " For the graph shown below, find and   The graph      "
},
{
  "id": "s_chromatic_exercises-5",
  "level": "2",
  "url": "s_chromatic_exercises.html#s_chromatic_exercises-5",
  "type": "Exercise",
  "number": "5.5.5",
  "title": "",
  "body": " Find the chromatic polynomial of the following three graphs. You should use the chromatic polynomial of the four cycle as a given:      "
},
{
  "id": "s_chromatic_exercises-6",
  "level": "2",
  "url": "s_chromatic_exercises.html#s_chromatic_exercises-6",
  "type": "Exercise",
  "number": "5.5.6",
  "title": "",
  "body": " Let be any edge of . Derive the chromatic polynomial of by colouring 'vertex by vertex'. Also find the chromatic polynomial of , and then check that the deletion-contraction formula holds in this csae.  Now let be another edge of . What's the chromatic polynomial of ? Does it matter whether and share a vertex?   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
