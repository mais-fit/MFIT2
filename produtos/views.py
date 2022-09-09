from dataclasses import fields
from django.shortcuts import render
from django.views.generic import ListView
from django.http import HttpResponse, HttpRequest

from produtos.models import Kit, Marmita


# class KitList(ListView):
#     model = Kit
#     template_name = "index.html"
#     queryset = Kit.objects.filter(ativo=True)

def lista_kits(request):
    kits = Kit.objects.filter(ativo=True)
    return render(
        request,
        "index.html",
        {
            "kits": kits,
        }
    )


# class MarmitaList(ListView):
#     model = Marmita
#     template_name: str = "marmita.html"
#     queryset = Marmita.objects.filter(ativo=True)

def lista_marmitas(request, kit_id):
    # rendereiza o kit escolhido e as marmitas a serem escolhidas
    marmitas = Marmita.objects.filter(ativo=True)
    kit = Kit.objects.get(id=kit_id)
    request.session["kit_id"] = kit.id
    print(request.session["kit_id"])
    return render(
                    request, 
                    "marmita.html", 
                    {
                        "marmitas": marmitas,
                        "kit": kit
                    }
                )
