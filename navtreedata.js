/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "G+Smo", "index.html", [
    [ "Tutorials", "Tutorials.html", [
      [ "Tutorial 01: Hello G+Smo", "Tutorial01.html", [
        [ "Code repository", "Tutorial01.html#Folder01", [
          [ "Obtaining and compiling", "Tutorial01.html#Obtaining01", null ],
          [ "The source folder", "Tutorial01.html#Source01", null ],
          [ "The build (compilation) folder", "Tutorial01.html#BuildFolder01", null ],
          [ "Build types", "Tutorial01.html#build1", null ]
        ] ],
        [ "Getting started", "Tutorial01.html#get01", [
          [ "Streaming text messages", "Tutorial01.html#str01", null ],
          [ "Assertion macros", "Tutorial01.html#deb01", null ],
          [ "Arithmetic types", "Tutorial01.html#art1", null ]
        ] ],
        [ "Basic input and output", "Tutorial01.html#io01", [
          [ "Command line arguments", "Tutorial01.html#cmd01", null ],
          [ "The XML file format", "Tutorial01.html#xml01", null ],
          [ "Reading files", "Tutorial01.html#read01", null ],
          [ "Writing files", "Tutorial01.html#write01", null ]
        ] ],
        [ "Matrices and linear algebra", "Tutorial01.html#la01", null ],
        [ "Functions and bases", "Tutorial01.html#main01", [
          [ "gsFunction", "Tutorial01.html#Function01", null ],
          [ "gsBasis", "Tutorial01.html#Basis01", null ],
          [ "gsGeometry", "Tutorial01.html#Geometry01", null ]
        ] ]
      ] ],
      [ "Tutorial 02: Geometry", "Tutorial02.html", [
        [ "Univariate B-splines", "Tutorial02.html#bsp02", null ],
        [ "Multi-variate B-splines", "Tutorial02.html#bsp03", null ],
        [ "Hierarchical B-splines", "Tutorial02.html#bsp04", null ],
        [ "gsGeometry example", "Tutorial02.html#geometry01", [
          [ "Creating simple geometries", "Tutorial02.html#crgeo02", null ],
          [ "Re-constructing geometries", "Tutorial02.html#crgeo03", null ]
        ] ],
        [ "Multi-patch", "Tutorial02.html#multipatch02", null ]
      ] ],
      [ "Tutorial 03: Simulation", "Tutorial03.html", [
        [ "Relevant source files", "Tutorial03.html#files", null ],
        [ "Example 1: The Poisson Equation", "Tutorial03.html#poisson", null ],
        [ "Example 2: The Kirchhoff-Love shell", "Tutorial03.html#kirchhoff", null ]
      ] ],
      [ "Tutorial 04: Writing code", "Tutorial04.html", [
        [ "Configuration options", "Tutorial04.html#conf04", null ],
        [ "Debugging", "Tutorial04.html#debug04", null ],
        [ "Gismo and Cxx Standards", "Tutorial04.html#cxx", null ],
        [ "Quick Tips", "Tutorial04.html#tips04", null ]
      ] ],
      [ "Tutorial 05: G+Smo in other languages", "Tutorial05.html", [
        [ "Python via \\verbatim pygismo \\endverbatim", "Tutorial05.html#pygismo", null ],
        [ "Python via \\verbatim cppyy \\endverbatim", "Tutorial05.html#cppyy", null ],
        [ "C via the \\ref gsCInterface", "Tutorial05.html#cinterface", null ],
        [ "Julia via the \\ref gsCInterface", "Tutorial05.html#julia", null ],
        [ "MATLAB via the \\ref gsCInterface", "Tutorial05.html#matlab", null ]
      ] ]
    ] ],
    [ "Examples", "Examples.html", [
      [ "adaptiveConvectionDiffusionReaction_example.cpp", "adaptiveConvectionDiffusionReaction_example.html", [
        [ "Annotated source file", "adaptiveConvectionDiffusionReaction_example.html#adaptiveConvectionDiffusionReaction_exampleAnnotated", null ]
      ] ],
      [ "adaptRefinementThb_example.cpp", "adaptRefinementThb_example.html", [
        [ "Setting up the problem", "adaptRefinementThb_example.html#sSetup", [
          [ "Problem definition", "adaptRefinementThb_example.html#sProblemDef", null ],
          [ "Getting geometry and basis", "adaptRefinementThb_example.html#sGetGeoBasis", [
            [ "Get a gsTHBSplineBasis from a gsTensorBSpline", "adaptRefinementThb_example.html#sGeoFromTens", null ]
          ] ]
        ] ],
        [ "Loop", "adaptRefinementThb_example.html#sMainLoop", [
          [ "Setting up adaptive refinement parameters", "adaptRefinementThb_example.html#sAdaRefSettings", null ],
          [ "Solving the problem", "adaptRefinementThb_example.html#solving", null ],
          [ "Adaptive refinement", "adaptRefinementThb_example.html#sAdaRefExecute", null ]
        ] ],
        [ "Plotting final solution", "adaptRefinementThb_example.html#sPlot", null ],
        [ "Annotated source file", "adaptRefinementThb_example.html#adaptRefinementThb_exampleAnnotated", null ]
      ] ],
      [ "assembly_example.cpp", "assembly_example.html", [
        [ "Annotated source file", "assembly_example.html#assembly_exampleAnnotated", null ]
      ] ],
      [ "basis_example.cpp", "basis_example.html", [
        [ "Annotated source file", "basis_example.html#basis_exampleAnnotated", null ]
      ] ],
      [ "biharmonic_example.cpp", "biharmonic_example.html", [
        [ "Annotated source file", "biharmonic_example.html#biharmonic_exampleAnnotated", null ]
      ] ],
      [ "biharmonic2_example.cpp", "biharmonic2_example.html", null ],
      [ "bSplineBasis_example.cpp", "bSplineBasis_example.html", [
        [ "Annotated source file", "bSplineBasis_example.html#bSplineBasis_exampleAnnotated", null ]
      ] ],
      [ "bSplineCurve_example.cpp", "bSplineCurve_example.html", [
        [ "Annotated source file", "bSplineCurve_example.html#bSplineCurve_exampleAnnotated", null ]
      ] ],
      [ "bSplineSurface_example.cpp", "bSplineSurface_example.html", [
        [ "Annotated source file", "bSplineSurface_example.html#bSplineSurface_exampleAnnotated", null ]
      ] ],
      [ "commandLineArg_example.cpp", "commandLineArg_example.html", [
        [ "Annotated source file", "commandLineArg_example.html#commandLineArg_exampleAnnotated", null ]
      ] ],
      [ "fileIo_example.cpp", "fileIo_example.html", [
        [ "Annotated source file", "fileIo_example.html#fileIo_exampleAnnotated", null ]
      ] ],
      [ "fitting_example.cpp", "fitting_example.html", [
        [ "Leveraging moving parameterization and adaptive THB-splines for CAD surface reconstruction", "fitting_example.html#alg01", [
          [ "SOLVE", "fitting_example.html#sec01", null ],
          [ "ESTIMATE", "fitting_example.html#sec02", null ],
          [ "MARK & REFINE", "fitting_example.html#sec03", null ],
          [ "MOVING PARAMETERS", "fitting_example.html#sec04", null ]
        ] ],
        [ "Leveraging moving parameterization and adaptive THB-splines in G+Smo", "fitting_example.html#exm01", null ],
        [ "Annotated source file", "fitting_example.html#fitting_exampleAnnotated", null ]
      ] ],
      [ "geometry_example.cpp", "geometry_example.html", [
        [ "Annotated source file", "geometry_example.html#geometry_exampleAnnotated", null ]
      ] ],
      [ "heatEquation_example.cpp", "heatEquation_example.html", [
        [ "Annotated source file", "heatEquation_example.html#heatEquation_exampleAnnotated", null ]
      ] ],
      [ "inputOutput_example.cpp", "inputOutput_example.html", [
        [ "Annotated source file", "inputOutput_example.html#inputOutput_exampleAnnotated", null ]
      ] ],
      [ "gsInterpolateMap.cpp", "gsInterpolateMap.html", [
        [ "Annotated source file", "gsInterpolateMap.html#gsInterpolateMapAnnotated", null ]
      ] ],
      [ "ieti_example.cpp", "ieti_example.html", [
        [ "Annotated source file", "ieti_example.html#ieti_exampleAnnotated", null ]
      ] ],
      [ "ieti2_example.cpp", "ieti2_example.html", [
        [ "Annotated source file", "ieti2_example.html#ieti2_exampleAnnotated", null ]
      ] ],
      [ "knotVector_example.cpp", "knotVector_example.html", [
        [ "Annotated source file", "knotVector_example.html#knotVector_exampleAnnotated", null ]
      ] ],
      [ "kirchhoff-Love_example.cpp", "kirchhoff-Love_example.html", [
        [ "Governing Equations", "kirchhoff-Love_example.html#equations", null ],
        [ "Implementation of the Kirchhoff-Love Shell", "kirchhoff-Love_example.html#implementation", null ],
        [ "References", "kirchhoff-Love_example.html#References", null ],
        [ "Contact", "kirchhoff-Love_example.html#Contact", null ]
      ] ],
      [ "linearAlgebra_example.cpp", "linearAlgebra_example.html", [
        [ "Annotated source file", "linearAlgebra_example.html#linearAlgebra_exampleAnnotated", null ]
      ] ],
      [ "linearSolvers_example.cpp", "linearSolvers_example.html", [
        [ "Annotated source file", "linearSolvers_example.html#linearSolvers_exampleAnnotated", null ]
      ] ],
      [ "mpi_example.cpp", "mpi_example.html", [
        [ "Annotated source file", "mpi_example.html#mpi_exampleAnnotated", null ]
      ] ],
      [ "multiGrid_example.cpp", "multiGrid_example.html", [
        [ "Annotated source file", "multiGrid_example.html#multiGrid_exampleAnnotated", null ]
      ] ],
      [ "paraview_example.cpp", "paraview_example.html", [
        [ "Output using gsWriteParaview", "paraview_example.html#paraview_example1", null ],
        [ "Output via the expression evaluator", "paraview_example.html#paraview_example2", null ],
        [ "Using gsParaviewCollection", "paraview_example.html#paraview_example3", null ],
        [ "Output of Bezier elements", "paraview_example.html#paraview_example4", null ],
        [ "Annotated source file", "paraview_example.html#paraview_exampleAnnotated", null ]
      ] ],
      [ "pMultiGrid_example.cpp", "pMultiGrid_example.html", [
        [ "Annotated source file", "pMultiGrid_example.html#pMultiGrid_exampleAnnotated", null ]
      ] ],
      [ "poisson2_example.cpp", "poisson2_example.html", [
        [ "Annotated source file", "poisson2_example.html#poisson2_exampleAnnotated", null ]
      ] ],
      [ "poissonTHB_example.cpp", "poissonTHB_example.html", [
        [ "Annotated source file", "poissonTHB_example.html#poisson_exampleThbAnnotated", null ]
      ] ],
      [ "sparseSolvers_example.cpp", "sparseSolvers_example.html", [
        [ "Annotated source file", "sparseSolvers_example.html#sparseSolvers_exampleAnnotated", null ]
      ] ],
      [ "stokes_ieti_example.cpp", "stokes_ieti_example.html", [
        [ "Annotated source file", "stokes_ieti_example.html#stokes_ieti_exampleAnnotated", null ]
      ] ],
      [ "thbRefinement_example.cpp", "thbRefinement_example.html", [
        [ "Annotated source file", "thbRefinement_example.html#thbRefinement_exampleAnnotated", null ]
      ] ],
      [ "thbSplineBasis_example.cpp", "thbSplineBasis_example.html", [
        [ "Introduction", "thbSplineBasis_example.html#sIntro", [
          [ "1D-example", "thbSplineBasis_example.html#s1d", [
            [ "HB-splines", "thbSplineBasis_example.html#sssHB", null ],
            [ "THB-splines", "thbSplineBasis_example.html#sssTHB", null ]
          ] ],
          [ "2D-example", "thbSplineBasis_example.html#s2d", null ],
          [ "Formal definition", "thbSplineBasis_example.html#ssFormalDef", [
            [ "Truncation operation", "thbSplineBasis_example.html#sssTrunc", null ],
            [ "THB-spline basis", "thbSplineBasis_example.html#sssTHBdef", null ]
          ] ]
        ] ],
        [ "Constructing a THB-spline-basis", "thbSplineBasis_example.html#sConst", [
          [ "From tensor-basis", "thbSplineBasis_example.html#ssConstTens", null ],
          [ "From xml", "thbSplineBasis_example.html#ssConstXml", null ]
        ] ],
        [ "Refinement", "thbSplineBasis_example.html#sRef", [
          [ "vector )", "thbSplineBasis_example.html#sRefElts", null ],
          [ "by the \"<box>\" tag in the xml", "thbSplineBasis_example.html#sRefBox", null ],
          [ "using refine( gsMatrix )", "thbSplineBasis_example.html#sRefMatrix", null ]
        ] ],
        [ "Basic operations", "thbSplineBasis_example.html#sOps", [
          [ "\"standard\" operations", "thbSplineBasis_example.html#sOps0", null ],
          [ "gsHTensorBasis - specific", "thbSplineBasis_example.html#sOpsHBasis", [
            [ "Indexing / numbering of basis functions", "thbSplineBasis_example.html#sOpsHIndexing", null ],
            [ "Get level and knot span", "thbSplineBasis_example.html#sOpsHLevelAt", null ],
            [ "Show tree-structure", "thbSplineBasis_example.html#sOpsHTree", null ]
          ] ]
        ] ],
        [ "Remarks regarding refinement", "thbSplineBasis_example.html#sRemRef", [
          [ "Size of refined area", "thbSplineBasis_example.html#ssRefAreaSize", null ],
          [ "Additional refinement during refinement", "thbSplineBasis_example.html#sRefExtra", null ],
          [ "Preservation of coefficients", "thbSplineBasis_example.html#sRefPresOfCoeff", null ]
        ] ],
        [ "References", "thbSplineBasis_example.html#sReferences", null ],
        [ "Annotated source file", "thbSplineBasis_example.html#thbSplineBasis_exampleAnnotated", null ]
      ] ],
      [ "trilinos_example.cpp", "trilinos_example.html", [
        [ "Annotated source file", "trilinos_example.html#trilinos_exampleAnnotated", null ]
      ] ],
      [ "triangulatedMeshToSolid_example.cpp", "triangulatedMeshToSolid_example.html", [
        [ "Annotated source file", "triangulatedMeshToSolid_example.html#triangulatedMeshToSolid_exampleAnnotated", null ]
      ] ],
      [ "gsView.cpp", "gsView.html", [
        [ "Annotated source file", "gsView.html#gsViewAnnotated", null ]
      ] ]
    ] ],
    [ "Modules", "group__Modules.html", null ],
    [ "Groups and hierarchies", "usergroup0.html", [
      [ "Geometries hierarchy", "group__geometry.html", null ],
      [ "Bases hierarchy", "group__basis.html", null ],
      [ "Functions hierarchy", "group__function.html", null ],
      [ "PDE definitions", "group__pdeclass.html", null ],
      [ "Combinatorics group", "group__combinatorics.html", null ],
      [ "Enumeration declarations", "group__enum.html", null ]
    ] ],
    [ "Class List", "annotated.html", "annotated" ],
    [ "Interfaces", "Interfaces.html", [
      [ "Python via cppyy", "Python_cppyy_interface.html", null ],
      [ "Python via pybind11", "Python_pybind11_interface.html", null ],
      [ "C", "C_interface.html", null ],
      [ "Julia via C", "Julia_interface.html", null ],
      [ "MATLAB via C", "MATLAB_interface.html", null ]
    ] ],
    [ "Bibliographic references", "citelist.html", null ]
  ] ]
];

var NAVTREEINDEX =
[
"C_interface.html",
"classgismo_1_1gsALMConsistentCrisfield.html#af5a4aaa10c7932bb9d0d5da5db5ffc90",
"classgismo_1_1gsALMRiks.html#ab5c72280683d765fad9c928c19b60d3a",
"classgismo_1_1gsBiharmonicAssembler.html#aba8462453eb7d166fc69a3e5b877b23e",
"classgismo_1_1gsDetFunction.html#adf7250a84da63b52a48783e2d24df638",
"classgismo_1_1gsExprEvaluator.html#a34abe9d7d603b4f76c2eb89513fb74aa",
"classgismo_1_1gsHalfEdgeMesh_1_1Halfedge.html#afa3a0a4c6e7f7b4a8a7f808e1ded086b",
"classgismo_1_1gsMappedSingleBasis.html#a67c12f72023c0f127333a72b9367dd9e",
"classgismo_1_1gsMaterialMatrixLinear.html#a8e5f97ceeb8e2164c9bdd4d695ba10d5",
"classgismo_1_1gsMuscleAssembler.html#ab16422a35f35383205fc67a569c3e1b2",
"classgismo_1_1gsOptimDE.html#a0a51187b52b68442bbe2302d9bfb29b7",
"classgismo_1_1gsSmoothInterfaces.html",
"classgismo_1_1gsSurfMesh.html#a588e0f69d96bd584043546cfd5e7fdc0",
"classgismo_1_1gsThermoAssembler.html#aa5f60737105776599c71929d37e85cb9",
"classgismo_1_1gsXBraid_3_01gsVector_3_01T_01_4_01_4.html#ab7d9f403ab92e010595ba34dbac348ab",
"structgismo_1_1boxComponent.html#aae8289195042bf2055bfce5d564764e9",
"structgismo_1_1stabilizerCDR.html#abed946c62f140eb7ff2ac742e6ad9497a9f15fee699801b2a7f2da012c89424a6"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';