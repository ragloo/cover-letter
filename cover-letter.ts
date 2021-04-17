<TeXmacs|1.99.19>

<style|source>

<\body>
  <\active*>
    <\src-title>
      <src-package|cover-letter-macros|1.0>

      <src-purpose|Automatically generated style package.>
    </src-title>
  </active*>

  <\active*>
    <\src-comment>
      Style parameters.
    </src-comment>
  </active*>

  <assign|font|Ubuntu>

  <assign|font-base-size|10>

  <assign|font-family|rm>

  <assign|font-series|thin>

  <assign|font-shape|right>

  <assign|full-screen-mode|false>

  <assign|math-font|math-dejavu>

  <assign|page-bot|1.8cm>

  <assign|page-crop-marks|>

  <assign|page-even|1.4cm>

  <assign|page-even-footer|<small|<name|<date|>><htab|5mm><name|Claud D. Park
  - Cover Letter>><htab|5mm>>

  <assign|page-even-header|>

  <assign|page-medium|paper>

  <assign|page-odd|1.4cm>

  <assign|page-odd-footer|<small|<name|<date|>><htab|5mm><name|Claud D. Park
  - Cover Letter>><htab|5mm>>

  <assign|page-odd-header|>

  <assign|page-right|1.4cm>

  <assign|page-screen-margin|false>

  <assign|page-top|1.4cm>

  <assign|prog-scripts|python>

  <\active*>
    <\src-comment>
      Macro definitions.
    </src-comment>
  </active*>

  \;

  <assign|section*|<macro|title|<assign|section-numbered|false><assign|section-prefix|<macro|>><compound|section-clean><compound|section-header|<arg|title>><compound|section-toc|<arg|title>><compound|section-unnumbered-title|<arg|title><underline|<htab|5mm>>>>>

  <assign|encl|<macro|body|<vspace*|0.5fn><localize|Encl>:
  <tabular|<tformat|<cwith|1|1|1|1|cell-lsep|0spc>|<cwith|1|1|1|1|cell-rsep|0spc>|<cwith|1|1|1|1|cell-hyphen|n>|<twith|table-valign|T>|<table|<row|<\cell>
    <encl*|<arg|body>>
  </cell>>>>><right-flush>>>

  <assign|signature|<macro|body|<surround|<vspace*|2fn>||<signature*|<with|font-series|bold|<arg|body>>>>>>

  <assign|closing|<macro|body|<\surround||<right-flush><vspace|2fn>>
    <closing*|<arg|body>>
  </surround>>>

  <assign|object|<macro|body|<\surround|<vspace*|1fn>|<vspace|1fn>>
    <with|font-series|bold|<underline|Object: <arg|body>>>
  </surround>>>
</body>

<initial|<\collection>
</collection>>