{{- $index := slice -}}
{{- $pages := .Site.Pages -}}
{{- range $pages -}}
  {{- $section := .Site.GetPage "section" .Section -}}
  {{- $page := (dict
    "title" (.Title | emojify | safeJS)
    "section" ($section.Title | emojify | safeJS)
    "summary" (.Summary | safeJS)
    "content" (.Plain | safeJS)
    "permalink" .RelPermalink
    "externalUrl" .Params.externalUrl
    "type" .Type
    ) -}}
  {{- if .Date -}}
    {{- $page = (merge $page (dict
      "date" (.Date | time.Format (.Site.Language.Params.dateFormat | default ":date_long"))
    )) -}}
  {{- end -}}
  {{- $index = $index | append $page -}}
{{- end -}}
window.SiteSearchIndex={{- $index | jsonify -}}
