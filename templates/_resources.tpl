{{/* vim: set filetype=mustache: */}}

{{/*
Return deploy master and worker resource request/limit object based on a given preset.
These presets are for basic testing and not meant to be used in production
{{ include "deploy.resources.preset" (dict "type" "nano") -}}
*/}}
{{- define "deploy.resources.preset" -}}
{{/* The limits are as per the documentation. The requests are limits reduced by approximately 150% and rounded.*/}}
{{- $presets := dict 
  "nano" (dict 
      "requests" (dict "cpu" "500m" "memory" "1Gi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "1.0" "memory" "2Gi" "ephemeral-storage" "2Gi")
   )
  "micro" (dict 
      "requests" (dict "cpu" "1.0" "memory" "2Gi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "2.0" "memory" "4Gi" "ephemeral-storage" "2Gi")
   )
  "small" (dict 
      "requests" (dict "cpu" "2.0" "memory" "5Gi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "4.0" "memory" "8Gi" "ephemeral-storage" "2Gi")
   )
  "medium" (dict 
      "requests" (dict "cpu" "5.0" "memory" "10Gi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "8.0" "memory" "16Gi" "ephemeral-storage" "2Gi")
   )
  "large" (dict 
      "requests" (dict "cpu" "10.0" "memory" "21Gi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "16.0" "memory" "32Gi" "ephemeral-storage" "2Gi")
   )
  "xlarge" (dict 
      "requests" (dict "cpu" "21.0" "memory" "42Gi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "32.0" "memory" "64Gi" "ephemeral-storage" "2Gi")
   )
  "2xlarge" (dict 
      "requests" (dict "cpu" "42.0" "memory" "85Gi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "64.0" "memory" "128Gi" "ephemeral-storage" "2Gi")
   )
 }}
{{- if hasKey $presets .type -}}
{{- index $presets .type | toYaml -}}
{{- else -}}
{{- printf "ERROR: Preset key '%s' invalid. Allowed values are %s" .type (join "," (keys $presets)) | fail -}}
{{- end -}}
{{- end -}}

{{/*
Return deploy central configuration resource request/limit object based on a given preset.
These presets are for basic testing and not meant to be used in production
{{ include "centralConfiguration.resources.preset" (dict "type" "nano") -}}
*/}}
{{- define "centralConfiguration.resources.preset" -}}
{{/* The limits are the requests increased by 50%*/}}
{{- $presets := dict
  "nano" (dict
      "requests" (dict "cpu" "250m" "memory" "256Mi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "375m" "memory" "384Mi" "ephemeral-storage" "2Gi")
   )
  "micro" (dict
      "requests" (dict "cpu" "500m" "memory" "512Mi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "750m" "memory" "768Mi" "ephemeral-storage" "2Gi")
   )
  "small" (dict
      "requests" (dict "cpu" "500m" "memory" "1Gi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "750m" "memory" "1.5Gi" "ephemeral-storage" "2Gi")
   )
  "medium" (dict
      "requests" (dict "cpu" "1.0" "memory" "2Gi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "1.5" "memory" "3Gi" "ephemeral-storage" "2Gi")
   )
  "large" (dict
      "requests" (dict "cpu" "1.5" "memory" "4Gi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "3.0" "memory" "6Gi" "ephemeral-storage" "2Gi")
   )
  "xlarge" (dict
      "requests" (dict "cpu" "1.5" "memory" "4Gi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "6.0" "memory" "12Gi" "ephemeral-storage" "2Gi")
   )
  "2xlarge" (dict
      "requests" (dict "cpu" "1.5" "memory" "4Gi" "ephemeral-storage" "50Mi")
      "limits" (dict "cpu" "12.0" "memory" "24Gi" "ephemeral-storage" "2Gi")
   )
 }}
{{- if hasKey $presets .type -}}
{{- index $presets .type | toYaml -}}
{{- else -}}
{{- printf "ERROR: Preset key '%s' invalid. Allowed values are %s" .type (join "," (keys $presets)) | fail -}}
{{- end -}}
{{- end -}}