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

  <assign|page-even-footer|<very-small|<name|<date|>><htab|5mm><name|<firstname>
  <lastname> - Cover Letter><htab|5mm>>>

  <assign|page-even-header|>

  <assign|page-medium|paper>

  <assign|page-odd|1.4cm>

  <assign|page-odd-footer|<very-small|<name|<date|>><htab|5mm><name|<firstname>
  <lastname> - Cover Letter><htab|5mm>>>

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

  <assign|firstname|Claud D.>

  <assign|lastname|Park>

  <assign|email|posquit0.bj@gmail.com >

  <assign|webpage|www.posquit0.com >

  <assign|phone|(+82) 10-9030-1843 >

  <assign|github|posquit0>

  <assign|linkedIn|posquit0>

  \;

  <assign|section*|<macro|title|<assign|section-numbered|false><assign|section-prefix|<macro|>><compound|section-clean><compound|section-header|<arg|title>><compound|section-toc|<arg|title>><compound|section-unnumbered-title|<arg|title><underline|<htab|0mm>>>>>

  \;

  <assign|destination-name|<macro|body|<with|font-series|bold|<arg|body>>>>

  \;

  <assign|destination-address|<\macro|body>
    <with|par-par-sep|0.333fn|<very-small|<name|<arg|body>>>>
  </macro>>

  \;

  <assign|object|<macro|body|<\surround|<vspace*|1fn>|<vspace|1fn>>
    <with|font-series|bold|<underline|<arg|body>>>
  </surround>>>

  \;

  <assign|opening|<macro|body|<\surround|<vspace*|1fn>|<right-flush><vspace|1fn>>
    <arg|body>
  </surround>>>

  \;

  <assign|closing|<macro|body|<\surround|<vspace*|1fn>|<right-flush><vspace|1fn>>
    <arg|body>
  </surround>>>

  \;

  <assign|signature|<macro|body|<surround|<vspace*|1fn>||<with|font-series|bold|<arg|body>>>>>

  <assign|sender-name|<macro|firstname|lastname|<really-huge|<arg|firstname>
  <with|font-series|bold|<arg|lastname>>>>>

  <assign|sender-title|<macro|body|<name|<small|<with|color|red|<arg|body>>>>>>

  <assign|sender-address|<macro|body|<compound|small|<arg|body>>>>

  <assign|sender-citation|<macro|body|<surround|<vspace*|2fn>||<small|<with|font-shape|italic|<arg|body>>>>>>

  <assign|encl|<macro|body|<surround|<vspace*|1fn>||<with|font-shape|italic|<localize|Encl>:
  <arg|body>>>>>

  \;
</body>

<initial|<\collection>
</collection>>