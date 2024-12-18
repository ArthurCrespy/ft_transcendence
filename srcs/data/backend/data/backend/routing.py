from django.urls import re_path
from api import consumers
from chat import consumers as chat_consumers
from pong import consumers as pong_consumers

websocket_urlpatterns = [
    re_path(r'ws/status/$', consumers.StatusConsumer.as_asgi()),
    re_path(r'ws/notifications/$', consumers.NotificationConsumer.as_asgi()),
    re_path(r'ws/friends/$', consumers.FriendShipConsumer.as_asgi()),
    re_path(r'ws/chat/(?P<conversationID>\w+)/$', chat_consumers.ChatConsumer.as_asgi()),
    re_path(r'ws/pong/$', pong_consumers.PongConsumer.as_asgi()),
    re_path(r'ws/cli_pong/$', pong_consumers.CLIPongConsumer.as_asgi()),
    re_path(r'ws/tournament/$', pong_consumers.TournamentConsumer.as_asgi()),
]
