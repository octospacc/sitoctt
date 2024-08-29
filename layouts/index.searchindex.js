{{- $index := slice -}}
{{- $pages := .Site.Pages -}}
{{- range $pages -}}
  {{- $section := .Site.GetPage "section" .Section -}}
  {{- if .Date -}}
    {{- $index = $index | append (dict
    "date" (.Date | time.Format (.Site.Language.Params.dateFormat | default ":date_long")) 
    "title" (.Title | emojify | safeJS)
    "section" ($section.Title | emojify | safeJS)
    "summary" (.Summary | safeJS)
    "content" (.Plain | safeJS)
    "permalink" .RelPermalink
    "externalUrl" .Params.externalUrl
    "type" .Type
    ) -}}
  {{- else -}}
    {{- $index = $index | append (dict
    "title" (.Title | emojify | safeJS)
    "section" ($section.Title | emojify | safeJS)
    "summary" (.Summary | safeJS)
    "content" (.Plain | safeJS)
    "permalink" .RelPermalink
    "externalUrl" .Params.externalUrl
    "type" .Type
    ) -}}
  {{- end -}}
{{- end -}}
window.SiteSearchIndex={{- $index | jsonify -}}
